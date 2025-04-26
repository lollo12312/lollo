import { create } from 'zustand';


interface Todo {
    id: number;
    text: string;
    done: boolean;
  }
interface User {
    username: string;
    token: string;
  }
  
  interface CounterStore {
    count: number;
    todos: Todo[];
    user: User | null;
    isAuthenticated: boolean;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
  }
  
  const useCounterStore = create<CounterStore>((set) => ({
    count: 0 ,
    todos: [],
    user: null,
    isAuthenticated: false,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
    addTodo: (text) => set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, done: false }]
    })),
    removeTodo: (id) => set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    })),
    toggleTodo: (id) => set((state) => ({
      todos: state.todos.map(todo => 
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    })),
    login: async (username, password) => {
        // 模拟 API 调用
        await new Promise(resolve => setTimeout(resolve, 1000));
        set({
          user: { username, token: 'fake-jwt-token' },
          isAuthenticated: true
        });
      },
      logout: () => set({ user: null, isAuthenticated: false }),
  }));

export default useCounterStore