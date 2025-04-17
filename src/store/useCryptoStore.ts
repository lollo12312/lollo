// 从 'zustand' 库中导入 create 函数，用于创建状态管理的 store
import { create } from 'zustand';
// 导入 CryptoJS 库，该库提供了加密和解密的功能
import CryptoJS from 'crypto-js';

// 定义 CryptoStore 接口，用于描述加密相关的状态和方法
// 包含输入文本 inputText、输出文本 outputText、密码 password
// 以及设置输入文本的 setInputText 方法、设置密码的 setPassword 方法
// 加密方法 encrypt、解密方法 decrypt 和清空所有内容的 clearAll 方法
interface CryptoStore {
  inputText: string;
  outputText: string;
  password: string;
  setInputText: (text: string) => void;
  setPassword: (pwd: string) => void;
  encrypt: () => void;
  decrypt: () => void;
  clearAll: () => void;
}

// 使用 create 函数创建一个名为 useCryptoStore 的状态管理 store
// 传入一个回调函数，该回调函数接收 set 方法，用于更新状态
const useCryptoStore = create<CryptoStore>((set) => ({
  // 初始化输入文本为空字符串
  inputText: '',
  // 初始化输出文本为空字符串
  outputText: '',
  // 初始化密码为空字符串
  password: '',
  // 设置输入文本的方法，通过 set 方法更新 inputText 状态
  setInputText: (text) => set({ inputText: text }),
  // 设置密码的方法，通过 set 方法更新 password 状态
  setPassword: (pwd) => set({ password: pwd }),
  // 加密方法
  encrypt: () => set((state) => {
    // 如果输入文本或密码为空，则不进行任何操作，返回空对象
    if (!state.inputText || !state.password) return {};
    // 使用 CryptoJS 的 AES 算法对输入文本进行加密，并将结果转换为字符串
    const encrypted = CryptoJS.AES.encrypt(state.inputText, state.password).toString();
    // 打印加密时使用的密码，用于调试
    console.log('Encrypted password:', state.password);
    // 打印加密后的文本，用于调试
    console.log('Encrypted text:', encrypted);
    // 更新 outputText 状态为加密后的文本
    return { outputText: encrypted };
  }),
  // 解密方法
  decrypt: () => set((state) => {
    // 如果输入文本或密码为空，则不进行任何操作，返回空对象
    if (!state.inputText || !state.password) return {};
    // 打印解密时使用的密码，用于调试
    console.log('Decrypting password:', state.password);
    // 打印解密时的输入文本，用于调试
    console.log('Decrypting text:', state.inputText);
    try {
      // 使用 CryptoJS 的 AES 算法对输入文本进行解密，并将结果转换为 UTF8 编码的字符串
      const decrypted = CryptoJS.AES.decrypt(state.inputText, state.password).toString(CryptoJS.enc.Utf8);
      // 打印解密后的文本，用于调试
      console.log('Decrypted text:', decrypted);
      // 更新 outputText 状态为解密后的文本，如果解密结果为空则显示密码可能不正确的提示
      return { outputText: decrypted || '解密失败: 密码可能不正确' };
    } catch (error) {
      // 捕获解密过程中的错误，并打印错误信息，用于调试
      console.error('Decryption error:', error);
      // 更新 outputText 状态为显示无效的加密数据的提示
      return { outputText: '解密失败: 无效的加密数据' };
    }
  }),
  // 清空所有内容的方法，通过 set 方法将 inputText、outputText 和 password 都设置为空字符串
  clearAll: () => set({ inputText: '', outputText: '', password: '' }),
}));

// 导出 useCryptoStore，以便在其他组件中使用该状态管理 store
export default useCryptoStore;