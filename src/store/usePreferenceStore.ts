import { create } from 'zustand';

// 定义偏好设置存储的接口类型
interface PreferenceStore {
  fontSize: number;            // 字体大小
  darkMode: boolean;          // 暗黑模式开关状态
  notificationsEnabled: boolean; // 通知功能开关状态
  increaseFontSize: () => void;  // 增大字体方法
  decreaseFontSize: () => void;  // 减小字体方法
  toggleDarkMode: () => void;    // 切换暗黑模式方法
  toggleNotifications: () => void; // 切换通知状态方法
}

/**
 * 创建并导出偏好设置全局状态存储
 */
const usePreferenceStore = create<PreferenceStore>((set) => ({
  // 初始状态
  fontSize: 16,                
  darkMode: false,            
  notificationsEnabled: true,  

  // 增大字体方法（每次增加2px，最大不超过24px）
  increaseFontSize: () => set((state) => ({
    fontSize: Math.min(state.fontSize + 2, 24) // 使用Math.min确保不超过最大值
  })),

  // 减小字体方法（每次减少2px，最小不小于12px）
  decreaseFontSize: () => set((state) => ({
    fontSize: Math.max(state.fontSize - 2, 12) // 使用Math.max确保不低于最小值
  })),

  // 切换暗黑模式（布尔值取反）
  toggleDarkMode: () => set((state) => ({
    darkMode: !state.darkMode  // 将当前状态取反
  })),

  // 切换通知功能开关（布尔值取反）
  toggleNotifications: () => set((state) => ({
    notificationsEnabled: !state.notificationsEnabled // 将当前状态取反
  })),
}));

export default usePreferenceStore;