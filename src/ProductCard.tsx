import React from'react';

const ProductCard = () => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-64">
      <img src="https://example.com/product.jpg" alt="产品" className="w-full h-32 object-cover mb-2" />
      <h2 className="text-lg font-bold mb-1">产品名称</h2>
      <p className="text-gray-600 mb-2">产品描述内容。</p>
      <p className="text-green-600 font-bold">$99.99</p>
    </div>
  );
};

export default ProductCard;