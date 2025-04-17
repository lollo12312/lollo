// 从zustand库中导入create函数，用于创建状态管理的store
import { create } from 'zustand';

// 定义Language类型，它是一个联合类型，只能取值为'zh'（中文）或'en'（英文）
type Language = 'zh' | 'en';

// 定义LanguageStore接口，描述语言状态管理的属性和方法
// 包含当前语言类型language（类型为Language），设置语言的方法setLanguage，
// 以及一个translations对象，用于存储不同语言的翻译文本
interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: {
    [key in Language]: {
      greeting: string;
      buttonText: string;
      content: string;
    };
  };
}

// 使用create函数创建一个名为useLanguageStore的状态管理store
// 传入一个回调函数，该回调函数接收set方法，用于更新状态
const useLanguageStore = create<LanguageStore>((set) => ({
  // 初始化当前语言为中文'zh'
  language: 'zh',
  // 设置语言的方法，接收一个Language类型的参数lang
  // 通过set方法更新当前语言状态为传入的语言类型
  setLanguage: (lang) => set({ language: lang }),
  // 存储不同语言翻译文本的对象
  translations: {
    zh: {
      greeting: '你好，世界!',
      buttonText: '切换语言',
      content: '这是一个多语言示例内容'
    },
    en: {
      greeting: 'Hello World!',
      buttonText: 'Toggle Language',
      content: 'This is a multilingual example content'
    }
  }
}));

// 导出useLanguageStore，以便在其他组件中使用该状态管理store
export default useLanguageStore;