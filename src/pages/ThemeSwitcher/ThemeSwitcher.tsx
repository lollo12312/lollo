import useThemeStore, { Theme } from '../../store/useThemeStore';

const ThemeSwitcher = () => {
  const { theme, themes, setTheme } = useThemeStore();
  
  // 主题名称映射到中文
  const themeNames: Record<Theme, string> = {
    light: '明亮',
    dark: '暗黑', 
    cupcake: '可爱',
    forest: '森林',
    aqua: '海洋'
  };

  return (
    <div className="p-8 min-h-screen" data-theme={theme}>
      <div className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">主题切换器</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`btn ${theme === t ? 'btn-primary' : 'btn-outline'}`}
            >
              {themeNames[t]}
            </button>
          ))}
        </div>
        
        <div className="grid gap-4">
          <div className="bg-base-200 p-4 rounded-box">示例内容区域</div>
          <button className="btn btn-primary">主要按钮</button>
          <button className="btn btn-secondary">次要按钮</button>
          <div className="text-success">成功状态文本</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;