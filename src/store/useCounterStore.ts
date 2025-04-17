// 从 zustand 库中导入 create 函数，用于创建状态管理的 store
import { create } from 'zustand';

// 定义 CounterStore 接口，描述计数器状态管理所需的属性和方法
// 包含 count（计数器当前值）、history（计数器操作历史记录）
// 以及 increment（增加计数器值）、decrement（减少计数器值）、reset（重置计数器）、undo（撤销上一步操作）方法
interface CounterStore {
  count: number;
  history: number[];
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  undo: () => void;
}

// 使用 create 函数创建一个名为 useCounterStore 的状态管理 store
// 传入一个回调函数，该回调函数接收 set 方法，用于更新状态
const useCounterStore = create<CounterStore>((set) => ({
  // 初始化计数器的当前值为 0
  count: 0,
  // 初始化操作历史记录为空数组
  history: [],
  // 定义 increment 方法，用于增加计数器的值
  // 通过 set 方法更新状态，将 count 值加 1，并将更新前的 count 值添加到 history 数组中
  increment: () => set((state) => ({
    count: state.count + 1,
    history: [...state.history, state.count]
  })),
  // 定义 decrement 方法，用于减少计数器的值
  // 通过 set 方法更新状态，将 count 值减 1，并将更新前的 count 值添加到 history 数组中
  decrement: () => set((state) => ({
    count: state.count - 1,
    history: [...state.history, state.count]
  })),
  // 定义 reset 方法，用于重置计数器的值为 0
  // 通过 set 方法更新状态，将 count 值设为 0，并将更新前的 count 值添加到 history 数组中
  reset: () => set((state) => ({
    count: 0,
    history: [...state.history, state.count]
  })),
  // 定义 undo 方法，用于撤销上一步操作
  // 通过 set 方法更新状态，如果 history 数组不为空，则将 count 值恢复为 history 数组的最后一个元素
  // 同时将 history 数组的最后一个元素移除
  undo: () => set((state) => ({
    count: state.history.length > 0 ? state.history[state.history.length - 1] : 0,
    history: state.history.slice(0, -1)
  })),
}));

// 导出 useCounterStore，供其他组件使用该状态管理 store
export default useCounterStore;