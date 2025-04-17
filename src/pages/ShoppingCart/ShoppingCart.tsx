import useCartStore from '../../store/useCartStore';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: '无线耳机', price: 99.99 },
  { id: 2, name: '智能手表', price: 199.99 },
  { id: 3, name: '蓝牙音箱', price: 59.99 },
];

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartStore();
  
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">购物车</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* 商品列表 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">商品列表</h2>
            <div className="space-y-4">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between items-center p-4 bg-base-200 rounded-box">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p>¥{product.price.toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="btn btn-primary btn-sm"
                  >
                    加入购物车
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* 购物车内容 */}
          <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">我的购物车</h2>
              <button 
                onClick={clearCart}
                className="btn btn-error btn-sm"
                disabled={cart.length === 0}
              >
                清空购物车
              </button>
            </div>
            
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p>购物车是空的</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-base-200 rounded-box">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span>¥{item.price.toFixed(2)}</span>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-circle btn-xs btn-error"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
                <div className="divider"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>总计:</span>
                  <span>¥{total.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-full mt-4">
                  去结算
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;