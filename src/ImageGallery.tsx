import React from "react";

const ImageGallery = () => {
    const images = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`图片 ${index + 1}`} className="w-full h-auto" />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;