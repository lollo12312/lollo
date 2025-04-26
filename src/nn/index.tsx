import React from 'react';
import MyTitle from '../SysPage/MyTitle';
import Sidebar from '../SysPage2/Sidebar';

const SysPage2 = () => {
  // 定义左侧栏的标题和内容
  const sidebarTitle: string = "左侧栏标题";

  // 定义动态菜单项数据
  const menuItems = [
    { label: "首页", link: "#home" },
    { label: "关于我们", link: "#about" },
    { label: "服务", link: "#services" },
    { label: "联系我们", link: "#contact" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <MyTitle />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar title={sidebarTitle} menuItems={menuItems} />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
            

        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
               

                <div className="mt-6 lg:mt-0 lg:px-2 lg:w-5/5 a">
                 

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img className="object-cover w-full rounded-md h-72 xl:h-80 " src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt"/>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">印花衬衫</h4>
                            <p className="text-blue-500">¥40</p>

                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">添加到购物车</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img className="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80" alt="T-Shirt"/>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> 纯白衬衫</h4>
                            <p className="text-blue-500">¥58.70</p>

                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">添加到购物车</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img className="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="T-Shirt"/>
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">图案衬衫</h4>
                            <p className="text-blue-500">¥60.99</p>

                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">添加到购物车</span>
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img className="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="T-Shirt" />
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">艺术衬衫</h4>
                            <p className="text-blue-500">¥42.55</p>

                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">添加到购物车</span>
                            </button>
                        </div>

                          <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                            <img className="object-cover w-full rounded-md h-72 xl:h-80" src="https://cbu01.alicdn.com/img/ibank/2019/520/950/11558059025_1104665416.jpg" alt="T-Shirt" />
                            <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">纯白长衬衫</h4>
                            <p className="text-blue-500">¥62</p>

                            <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="mx-1">添加到购物车</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      
        </div>
      </div>
    </div>
  );
}

export default SysPage2;


/**
 * h-screen : 让最外层占满整个屏幕
 */