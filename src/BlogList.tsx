import React from "react";

const BlogList = () => {
    const blogPosts = [
        {
            id: 1,
            title: "文章标题1",
            excerpt: "这是文章1的摘要内容。",
            date: "2025-02-25"
        },
        {
            id: 2,
            title: "文章标题2",
            excerpt: "这是文章2的摘要内容。",
            date: "2025-02-24"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            {blogPosts.map(post => (
                <div key={post.id} className="mb-8 border-b pb-4">
                    <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-1">{post.date}</p>
                    <p className="text-gray-700">{post.excerpt}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;