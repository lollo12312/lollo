import React, { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('姓名:', name);
        console.log('邮箱:', email);
        console.log('消息:', message);
        alert("你已提交成功");
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center p-4">
            <div className="w-full max-w-md">
                <form 
                    className="bg-white p-8 rounded-lg shadow-lg space-y-6"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-gray-800 text-center">联系我们</h2>
                    <input
                        type="text"
                        placeholder="姓名"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                    <input
                        type="email"
                        placeholder="邮箱"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                    <textarea
                        placeholder="消息"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                        提交
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;