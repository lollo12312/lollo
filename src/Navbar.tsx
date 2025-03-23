import React from'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-lg font-bold">Logo</a>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">首页</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">关于</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">服务</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;