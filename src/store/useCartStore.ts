import { create } from 'zustand';

// 定义商品接口，描述商品对象的结构
// 包含商品的唯一标识id、商品名称name和商品价格price
interface Product {
  id: number;
  name: string;
  price: number;
}

// 定义购物车状态管理接口
// 包含购物车中商品列表cart，添加商品到购物车的方法addToCart，
// 从购物车中移除商品的方法removeFromCart，清空购物车的方法clearCart
interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

// 使用zustand创建购物车状态管理的钩子函数useCartStore
// 接受一个回调函数，该回调函数返回初始状态和状态更新方法
const useCartStore = create<CartStore>((set) => ({
  // 初始化购物车为空数组
  cart: [],
  // 添加商品到购物车的方法
  // 接受一个商品对象product，通过展开运算符将原购物车商品列表和新商品合并
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  })),
  // 从购物车中移除商品的方法
  // 接受商品的唯一标识productId，通过过滤掉id匹配的商品来更新购物车列表
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id!== productId)
  })),
  // 清空购物车的方法
  // 将购物车列表设置为空数组
  clearCart: () => set({ cart: [] }),
}));

// 导出购物车状态管理的钩子函数
export default useCartStore;
