import { useState } from 'react';
import useTodoStore from '../../store/useTodoStore';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">待办事项</h1>
        
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="输入待办事项..."
            className="input input-bordered flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          />
          <button onClick={handleAddTodo} className="btn btn-primary">
            添加
          </button>
        </div>
        
        <div className="space-y-2">
          {todos.length === 0 ? (
            <div className="text-center py-4 text-gray-500">暂无待办事项</div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className="flex items-center gap-2 p-3 bg-base-200 rounded-box">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="checkbox checkbox-primary"
                />
                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-circle btn-xs btn-error"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4 text-sm text-gray-500">
          已完成: {todos.filter(t => t.completed).length} / 总计: {todos.length}
        </div>
      </div>
    </div>
  );
};

export default TodoList;