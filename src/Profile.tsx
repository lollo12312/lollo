import React from'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="https://example.com/avatar.jpg" alt="头像" className="w-24 h-24 rounded-full mb-4" />
      <h1 className="text-2xl font-bold mb-2">张三</h1>
      <p className="text-gray-600 mb-4">一名热爱编程的开发者。</p>
      <ul className="list-disc pl-6">
        <li className="text-gray-600">React</li>
        <li className="text-gray-600">Tailwind CSS</li>
      </ul>
    </div>
  );
};

export default Profile;