'use client'; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTag, faCalendar } from '@fortawesome/free-solid-svg-icons';

// 导入服务和类型
import { Work } from '../api/proxy/WorkService/work';
import axios from 'axios';

export default function Portfolio() {
  const [works, setWorks] = useState<Work[]>([]);
  const [filteredWorks, setFilteredWorks] = useState<Work[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); 

  // 模拟数据（可自定义内容）
  const mockWorks: Work[] = [
    {
      id: 1,
      title: '作品1',
      description: '这是作品1的描述内容，讲述独特故事',
      image: 'https://picsum.photos/300/200', // 用 picsum 的占位图，也可换自己的
      tags: ['风景', '自然'],
      createdAt: '2025-01-01',
      updatedAt: '2025-01-02',
      userId: 1,
    },
    {
      id: 2,
      title: '作品2',
      description: '作品2的精彩描述，展现创意设计',
      image: 'https://picsum.photos/300/201', 
      tags: ['城市', '建筑'],
      createdAt: '2025-02-01',
      updatedAt: '2025-02-02',
      userId: 1,
    },
    {
      id: 3,
      title: '作品3',
      description: '作品3的详细介绍，传递独特理念',
      image: 'https://picsum.photos/300/202', 
      tags: ['人像', '生活'],
      createdAt: '2025-03-01',
      updatedAt: '2025-03-02',
      userId: 1,
    },
  ];

  // 加载数据：先显示模拟数据，再合并接口数据
  useEffect(() => {
    // 1. 先设置模拟数据
    setWorks(mockWorks);
    setFilteredWorks(mockWorks);
    setLoading(false);

    // 2. 异步请求真实接口
    const fetchRealData = async () => {
      try {
        const response = await axios.get('/api/proxy/rotus');
        // 合并数据：模拟数据 + 接口数据（去重，避免重复）
        const mergedWorks = [...mockWorks, ...response.data].reduce(
          (acc, cur) => {
            // 根据 ID 去重（mock 数据用特殊前缀，接口数据用真实 ID）
            if (!acc.some((item: { id: any; }) => item.id === cur.id)) {
              acc.push(cur);
            }
            return acc;
          },
          [] as Work[]
        );
        setWorks(mergedWorks);
        setFilteredWorks(mergedWorks);
      } catch (error) {
        console.error('接口请求失败，仅显示模拟数据:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRealData();
  }, []);

  // 搜索 + 标签过滤逻辑（无需修改）
  useEffect(() => {
    let result = [...works];
    if (selectedTag) {
      result = result.filter(work => work.tags.includes(selectedTag));
    }
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      result = result.filter(work => 
        work.title.toLowerCase().includes(lowerCaseTerm) ||
        work.description.toLowerCase().includes(lowerCaseTerm) ||
        work.tags.some(tag => tag.toLowerCase().includes(lowerCaseTerm))
      );
    }
    setFilteredWorks(result);
  }, [works, searchTerm, selectedTag]);

  // 提取所有唯一标签（无需修改）
  const allTags = works.reduce((tags, work) => {
    work.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
    return tags;
  }, [] as string[]);

  // 作品点击跳转（无需修改）
  const handleWorkClick = (workId: string) => {
    router.push(`/portfolio/${workId}`); 
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-10">
          <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold mb-4">我的作品</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索我的创意作品和设计项目，每一个作品都讲述着独特的故事和创意
          </p>
        </div>

        {/* 搜索 + 标签过滤区域 */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="搜索作品或标签..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pl-10"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className={`px-4 py-2 rounded-full ${
                selectedTag ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'
              } font-medium transition-colors`}
              onClick={() => setSelectedTag(null)}
            >
              全部
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full ${
                  selectedTag === tag ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } font-medium transition-colors`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 作品列表区域 */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredWorks.length === 0 ? (
          <div className="text-center py-12">
            <FontAwesomeIcon icon={faTag} className="text-gray-300 text-4xl mb-4" />
            <p className="text-gray-500">没有找到匹配的作品</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map(work => (
              <div 
                key={work.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => handleWorkClick(work.id)} 
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1">
                      {work.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-blue-500/80 text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {work.description}
                  </p>
                </div>

                <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <FontAwesomeIcon icon={faCalendar} className="mr-1" />
                    {new Date(work.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}