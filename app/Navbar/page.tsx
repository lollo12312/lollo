'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faImages, faUpload } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home/page';
import Portfolio from '../portfolio/page';
// import Upload from '../Upload/page';
// import Profile from '../Profile/page';

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // 从localStorage加载登录状态
  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token');
    setIsLoggedIn(!!storedToken);
  }, []);

  // 处理页面内导航切换
  const handlePageChange = (page:any) => {
    setCurrentPage(page);
  };

  // 处理登录操作
  const handleLogin = () => {
    localStorage.setItem('auth_token', 'authenticated');
    setIsLoggedIn(true);
    router.push('/'); // 登录后跳转至首页
  };

  // 处理登出操作
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setIsLoggedIn(false);
    router.push('/login'); // 登出后跳转至登录页
  };

  // 处理登录/注册页面跳转
  const handleAuthPage = (page:any) => {
    router.push(`/${page}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-1 cursor-pointer" onClick={() => handlePageChange('home')}>
            <FontAwesomeIcon icon={faHome} className="text-blue-600 text-xl" />
            <span className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              首页
            </span>
          </div>
          
          <nav className="flex items-center space-x-6">
            {/* 作品展示和文件上传使用单页切换 */}
            <button
              onClick={() => handlePageChange('portfolio')}
              className={`px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all 
                ${currentPage === 'portfolio' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <FontAwesomeIcon icon={faImages} className="mr-1" />作品展示
            </button>
            
            <button
              onClick={() => handlePageChange('upload')}
              className={`px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all 
                ${currentPage === 'upload' ? 'bg-blue-50 text-blue-600' : ''}`}
            >
              <FontAwesomeIcon icon={faUpload} className="mr-1" />文件上传
            </button>
            
            {/* 个人中心使用单页切换 */}
            {isLoggedIn ? (
              <button
                onClick={() => handlePageChange('profile')}
                className={`px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all 
                  ${currentPage === 'profile' ? 'bg-blue-50 text-blue-600' : ''}`}
              >
                <FontAwesomeIcon icon={faUser} className="mr-1" />个人中心
              </button>
            ) : (
              <>
                {/* 登录/注册使用页面跳转 */}
                <button
                  onClick={() => handleAuthPage('login')}
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  登录
                </button>
                <button
                  onClick={() => handleAuthPage('register')}
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  注册
                </button>
              </>
            )}
            
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-red-600 hover:bg-red-50 transition-all"
              >
                退出
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* 内容区域 - 根据当前激活的页面显示对应的组件 */}
      <main className="flex-grow pt-20">
        {currentPage === 'home' && <Home />}
        {currentPage === 'portfolio' && <Portfolio />}
        {/* {currentPage === 'upload' && <Upload />} */}
        {/* {currentPage === 'profile' && <Profile />} */}
      </main>
    </div>
  );
}