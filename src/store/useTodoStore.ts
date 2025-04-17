// 从 'zustand' 库中导入 create 函数，用于创建状态管理的 store
import { create } from 'zustand';

// 定义 Todo 接口，描述单个待办事项的结构
// 包含唯一标识符 id（字符串类型）、待办事项文本 text（字符串类型）
// 以及表示待办事项是否完成的布尔值 completed
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// 定义 TodoStore 接口，描述待办事项状态管理的属性和方法
// 包含待办事项数组 todos（元素类型为 Todo），添加待办事项的方法 addTodo
// 切换待办事项完成状态的方法 toggleTodo，删除待办事项的方法 deleteTodo
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

// 使用 create 函数创建一个名为 useTodoStore 的状态管理 store
// 传入一个回调函数，该回调函数接收 set 方法，用于更新状态
const useTodoStore = create<TodoStore>((set) => ({
  // 初始化待办事项数组为空
  todos: [],
  // 添加待办事项的方法，接收待办事项文本 text 作为参数
  // 通过 set 方法更新状态，使用展开运算符将原有的待办事项数组和新创建的待办事项合并
  // 新待办事项的 id 使用当前时间戳转换为字符串，初始状态为未完成
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }]
  })),
  // 切换待办事项完成状态的方法，接收待办事项的唯一标识符 id 作为参数
  // 通过 set 方法更新状态，使用 map 方法遍历待办事项数组
  // 对于匹配到 id 的待办事项，将其 completed 属性取反，其他待办事项保持不变
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  // 删除待办事项的方法，接收待办事项的唯一标识符 id 作为参数
  // 通过 set 方法更新状态，使用 filter 方法过滤掉 id 匹配的待办事项
  deleteTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id!== id)
  })),
}));

// 导出 useTodoStore，以便在其他组件中使用该状态管理 store
export default useTodoStore;