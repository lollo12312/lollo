import usePreferenceStore from '../../store/usePreferenceStore';

const Preferences = () => {
  const {
    fontSize,
    darkMode,
    notificationsEnabled,
    increaseFontSize,
    decreaseFontSize,
    toggleDarkMode,
    toggleNotifications
  } = usePreferenceStore();

  return (
    <div className="p-8 min-h-screen" data-theme={darkMode ? 'dark' : 'light'}>
      <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">用户偏好设置</h1>
        
        <div className="space-y-6">
          {/* 字体大小设置 */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">字体大小</h2>
              <p className="text-sm text-gray-500">当前: {fontSize}px</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={decreaseFontSize} 
                className="btn btn-circle btn-sm"
                disabled={fontSize <= 12}
              >
                -
              </button>
              <button 
                onClick={increaseFontSize} 
                className="btn btn-circle btn-sm"
                disabled={fontSize >= 24}
              >
                +
              </button>
            </div>
          </div>
          
          {/* 暗黑模式切换 */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">暗黑模式</h2>
              <p className="text-sm text-gray-500">
                {darkMode ? '已启用' : '已禁用'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle toggle-primary"
            />
          </div>
          
          {/* 通知设置 */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold">通知</h2>
              <p className="text-sm text-gray-500">
                {notificationsEnabled ? '已启用' : '已禁用'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={toggleNotifications}
              className="toggle toggle-secondary"
            />
          </div>
          
          {/* 预览区域 */}
          <div className="divider"></div>
          <div className="bg-base-200 p-4 rounded-box">
            <h2 className="font-bold mb-2">设置预览</h2>
            <p style={{ fontSize: `${fontSize}px` }}>
              这是一段预览文字，展示当前的字体大小设置效果。
            </p>
            <div className="mt-2">
              <p>暗黑模式: {darkMode ? '开启' : '关闭'}</p>
              <p>通知: {notificationsEnabled ? '开启' : '关闭'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;