import { create } from 'zustand';
import React, { createContext, useContext } from'react';

// 定义Theme类型，它是一个联合类型，表示可用的主题类型
// 包括 'light'（浅色主题）、'dark'（深色主题）、'cupcake'（纸杯蛋糕主题）、'forest'（森林主题）、'aqua'（水主题）
export type Theme = 'light' | 'dark' | 'cupcake' | 'forest' | 'aqua';

// 定义ThemeStore接口，描述主题状态管理的属性和方法
// 包含当前主题theme（类型为Theme），可用主题数组themes，切换主题的方法toggleTheme，设置主题的方法setTheme
interface ThemeStore {
  theme: Theme;
  themes: Theme[];
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

//  首先创建store
// 传入一个回调函数，该回调函数接收set方法，用于更新状态
const useThemeStore = create<ThemeStore>((set) => ({
  // 初始化当前主题为 'light'（浅色主题）
  theme: 'light',
  themes: ['light', 'dark', 'cupcake', 'forest', 'aqua'],
  // 切换主题的方法
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light'? 'dark' : 'light'
  })),
  // 设置主题的方法，接收一个Theme类型的参数theme
  // 通过set方法更新当前主题状态为传入的主题
  setTheme: (theme) => set({ theme }),
}));

//  创建Context对象 
// 使用React的createContext函数创建一个主题上下文对象ThemeContext
const ThemeContext = createContext<ThemeStore | undefined>(undefined);

//  创建Provider组件
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 获取主题状态管理对象store，通过调用useThemeStore钩子函数
  const store = useThemeStore();
  return (
    // 使用ThemeContext的Provider组件，将store作为值传递下去
    <ThemeContext.Provider value={store as ThemeStore}>
      {/* 根据当前主题设置HTML元素的data-theme属性，以便应用相应的主题样式 */}
      <div data-theme={store.theme}>
        {/* 渲染子组件 */}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 4. 创建自定义hook
// 定义一个名为useTheme的自定义钩子函数，用于在组件中获取主题上下文
export const useTheme = () => {
  // 使用React的useContext函数获取ThemeContext的上下文值
  const context = useContext(ThemeContext);
  // 如果上下文值为undefined，说明没有在ThemeProvider组件的包裹下使用该钩子函数，抛出错误
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  // 返回获取到的主题上下文对象
  return context;
};


export default useThemeStore;