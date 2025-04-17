import useCryptoStore from '../../store/useCryptoStore';

const CryptoTool = () => {
  const {
    inputText,
    outputText,
    password,
    setInputText,
    setPassword,
    encrypt,
    decrypt,
    clearAll
  } = useCryptoStore();

  return (
    <div className="p-8 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">加密/解密工具</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* 输入区域 */}
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">输入文本</span>
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="textarea textarea-bordered h-40"
                placeholder="输入要加密或解密的文本..."
              ></textarea>
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">密码</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                placeholder="输入加密/解密密码"
              />
            </div>
          </div>
          
          {/* 输出区域 */}
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">输出结果</span>
              </label>
              <textarea
                readOnly
                value={outputText}
                className="textarea textarea-bordered h-40 bg-base-200"
                placeholder="加密或解密的结果将显示在这里..."
              ></textarea>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {outputText && (
                  <span>结果长度: {outputText.length} 字符</span>
                )}
              </div>
              <button
                onClick={clearAll}
                className="btn btn-sm btn-error"
              >
                清空全部
              </button>
            </div>
          </div>
        </div>
        
        {/* 操作按钮 */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={encrypt}
            disabled={!inputText || !password}
            className="btn btn-primary"
          >
            加密
          </button>
          <button
            onClick={decrypt}
            disabled={!inputText || !password}
            className="btn btn-secondary"
          >
            解密
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default CryptoTool;