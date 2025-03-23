import React from "react";

const HeroSection = () => {
    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('https://example.com/hero-bg.jpg')" }}>
            <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">大标题</h1>
                <p className="text-xl text-white mb-6">简短描述内容</p>
                <button className="bg-yellow-500 text-black p-2 rounded">行动按钮</button>
            </div>
        </div>
    );
};

export default HeroSection;