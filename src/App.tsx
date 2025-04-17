import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ThemeSwitcher from './pages/ThemeSwitcher/ThemeSwitcher';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import LanguageSwitcher from './pages/LanguageSwitcher/LanguageSwitcher';
import TodoList from './pages/TodoList/TodoList';
import Counter from './pages/Counter/Counter';
import Preferences from './pages/Preferences/Preferences';
import FormDemo from './pages/FormDemo/FormDemo';
import CryptoTool from './pages/CryptoTool/CryptoTool';
import Timer from './Timer';
import Luo from './Luo';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        {/* 导航栏 */}
        <nav className="navbar bg-base-100 shadow-lg">
          <div className="navbar-start">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              Zustand练习
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              <li><Link to="/theme">主题切换</Link></li>
              <li><Link to="/cart">购物车</Link></li>
              <li><Link to="/language">多语言</Link></li>
              <li><Link to="/todo">待办事项</Link></li>
              <li><Link to="/counter">计数器</Link></li>
              <li><Link to="/preferences">偏好设置</Link></li>
              <li><Link to="/form">表单管理</Link></li>
              <li><Link to="/Timer">计时器</Link></li>
              <li><Link to="/Luo">图像分割</Link></li>
              {/* <li><Link to="/crypto">加密工具</Link></li> */}
            </ul>
          </div>
        </nav>

        {/* 主要内容区 */}
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <div className="text-center py-8">
                <h1 className="text-4xl font-bold mb-6">Zustand状态管理练习</h1>
                <p className="text-xl mb-8">选择上方导航栏查看各个练习示例</p>
              </div>
            } />
            <Route path="/theme" element={<ThemeSwitcher />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/language" element={<LanguageSwitcher />} />
            <Route path="/todo" element={<TodoList />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/form" element={<FormDemo />} />
            <Route path="/Timer" element={<Timer />} />
            <Route path="/Luo" element={<Luo />} />
            {/* <Route path="/crypto" element={<CryptoTool />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 