import React from "react";

const PriceTable = () => {
    const plans = [
        {
            id: 1,
            name: "基础套餐",
            price: "$19.99",
            features: ["功能1", "功能2"],
        },
        {
            id: 2,
            name: "高级套餐",
            price: "$49.99",
            features: ["功能1", "功能2", "功能3"],
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">套餐名称</th>
                        <th className="border border-gray-300 p-2">价格</th>
                        <th className="border border-gray-300 p-2">功能</th>
                        <th className="border border-gray-300 p-2">选择</th>
                    </tr>
                </thead>
                <tbody>
                    {plans.map(plan => (
                        <tr key={plan.id}>
                            <td className="border border-gray-300 p-2">{plan.name}</td>
                            <td className="border border-gray-300 p-2">{plan.price}</td>
                            <td className="border border-gray-300 p-2">
                                <ul className="list-disc pl-4">
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <button className="bg-green-500 text-white p-2 rounded">选择</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTable;