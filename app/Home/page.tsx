'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Homepage() {
  const [displayText, setDisplayText] = useState('');
  const targetText = '欢迎来到摄影中心爱好者网站';
  const typingSpeed = 150; // 每150毫秒显示一个字符

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= targetText.length) {
        // 直接从目标文本中截取，避免使用prev可能带来的问题
        setDisplayText(targetText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-800 mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {displayText}
          </span>
        </h1>
        <p className="text-gray-600 text-lg mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '3s' }}>
          探索摄影的魅力，分享您的精彩作品
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            浏览作品
          </Link>
          <Link href="/" className="px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-200">
            加入我们
          </Link>
        </div>
      </div>
      <div className="absolute bottom-8 text-gray-500 text-sm">
        © 2025 摄影中心爱好者网站. 保留所有权利.
      </div>
    </div>
  );
}