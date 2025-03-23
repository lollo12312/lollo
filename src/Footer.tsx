import React, { useState } from 'react';
import './main.css';

function Footer() {
  // 定义一组渐变色
  const gradients = [
    'bg-gradient-to-r from-blue-500 to-purple-500',
    'bg-gradient-to-r from-green-400 to-blue-600',
    'bg-gradient-to-r from-pink-500 to-yellow-500',
    'bg-gradient-to-r from-red-500 to-orange-500',
  ];

  // useState 管理当前渐变色的索引
  const [gradientIndex, setGradientIndex] = useState(0);

  // 点击按钮切换渐变色
  const handleSwitch = () => {
    setGradientIndex((gradientIndex + 1) % gradients.length);
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-center ${gradients[gradientIndex]} transition-all duration-500`}>
      <h1 className="text-4xl text-white mb-4">渐变色切换器</h1>
      <button 
        className="px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition"
        onClick={handleSwitch}
      >
        切换颜色
      </button>
      <p className="">当前渐变：{gradients[gradientIndex]}</p>
    </div>
  );
}

export default Footer;