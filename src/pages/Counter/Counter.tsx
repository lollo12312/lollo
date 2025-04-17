import useCounterStore from '../../store/useCounterStore';

const Counter = () => {
  const { count, history, increment, decrement, reset, undo } = useCounterStore();

  return (
    <div className="p-8 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">计数器</h1>
        
        <div className="text-center mb-6">
          <div className="text-5xl font-bold mb-2">{count}</div>
          <div className="text-sm text-gray-500">
            历史记录: {history.length} 次操作
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <button onClick={increment} className="btn btn-primary">
            增加 (+1)
          </button>
          <button onClick={decrement} className="btn btn-secondary">
            减少 (-1)
          </button>
          <button onClick={reset} className="btn btn-accent">
            重置
          </button>
          <button 
            onClick={undo} 
            className="btn btn-warning"
            disabled={history.length === 0}
          >
            撤销
          </button>
        </div>
        
        <div className="bg-base-200 p-4 rounded-box">
          <h2 className="font-bold mb-2">操作历史:</h2>
          {history.length === 0 ? (
            <p className="text-gray-500">暂无历史记录</p>
          ) : (
            <ul className="list-disc pl-5">
              {history.slice().reverse().map((h, i) => (
                <li key={i}>曾为: {h}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;