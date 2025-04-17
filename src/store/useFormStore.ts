// 从zustand库中导入create函数，用于创建状态管理的store
import { create } from 'zustand';

// 定义FormData接口，描述表单数据的结构
// 包含姓名name（字符串类型）、邮箱email（字符串类型）、年龄age（数字类型）、是否订阅subscribe（布尔类型）
interface FormData {
  name: string;
  email: string;
  age: number;
  subscribe: boolean;
}

// 定义FormStore接口，描述表单状态管理的属性和方法
// 包含表单数据formData（类型为FormData），更新表单数据的方法updateFormData，
// 重置表单的方法resetForm，提交表单的方法submitForm
interface FormStore {
  formData: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  resetForm: () => void;
  submitForm: () => Promise<void>;
}

// 使用create函数创建一个名为useFormStore的状态管理store
// 传入一个回调函数，该回调函数接收set方法，用于更新状态
const useFormStore = create<FormStore>((set) => ({
  // 初始化表单数据，设置默认值：姓名为空字符串，邮箱为空字符串，年龄为18，默认订阅
  formData: {
    name: '',
    email: '',
    age: 18,
    subscribe: true
  },
  // 更新表单数据的方法
  // 接收字段名field（类型为FormData的键类型）和对应的值value
  // 通过set方法更新表单数据，使用展开运算符保留原数据，并更新指定字段的值
  updateFormData: (field, value) => set((state) => ({
    formData: { ...state.formData, [field]: value }
  })),
  // 重置表单的方法
  // 通过set方法将表单数据重置为初始值
  resetForm: () => set({
    formData: {
      name: '',
      email: '',
      age: 18,
      subscribe: true
    }
  }),
  // 提交表单的方法，返回一个Promise
  submitForm: async () => {
    // 模拟API调用，使用setTimeout模拟延迟1秒后完成操作
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('表单已提交');
        // 操作完成后调用resolve，以解决Promise
        resolve();
      }, 1000);
    });
  }
}));

// 导出useFormStore，以便在其他组件中使用该状态管理store
export default useFormStore;