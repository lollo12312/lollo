import React from "react";

const CardGrid = () => {
    const cards = [
        {
            id: 1,
            imgSrc: "https://example.com/card1.jpg",
            title: "卡片标题1",
            description: "卡片1的简短描述"
        },
        {
            id: 2,
            imgSrc: "https://example.com/card2.jpg",
            title: "卡片标题2",
            description: "卡片2的简短描述"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map(card => (
                    <div key={card.id} className="bg-white p-4 rounded shadow-md">
                        <img src={card.imgSrc} alt={card.title} className="w-full h-32 object-cover mb-2" />
                        <h2 className="text-lg font-bold mb-2">{card.title}</h2>
                        <p className="text-gray-700">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardGrid;