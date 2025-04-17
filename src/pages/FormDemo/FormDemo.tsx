import { useState } from 'react';
import useFormStore from '../../store/useFormStore';

const FormDemo = () => {
  const { formData, updateFormData, resetForm, submitForm } = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    try {
      await submitForm();
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">表单数据管理</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 姓名输入 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">姓名</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="请输入您的姓名"
              className="input input-bordered"
              required
            />
          </div>
          
          {/* 邮箱输入 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">电子邮箱</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="example@example.com"
              className="input input-bordered"
              required
            />
          </div>
          
          {/* 年龄输入 */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">年龄</span>
            </label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => updateFormData('age', parseInt(e.target.value) || 0)}
              min="1"
              max="120"
              className="input input-bordered"
            />
          </div>
          
          {/* 订阅复选框 */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">订阅新闻邮件</span>
              <input
                type="checkbox"
                checked={formData.subscribe}
                onChange={(e) => updateFormData('subscribe', e.target.checked)}
                className="toggle toggle-primary"
              />
            </label>
          </div>
          
          {/* 按钮组 */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-error"
              disabled={isSubmitting}
            >
              重置表单
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '提交表单'}
            </button>
          </div>
        </form>
        
        {/* 提交状态反馈 */}
        {submitSuccess && (
          <div className="alert alert-success mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>表单提交成功!</span>
          </div>
        )}
        
        {/* 表单数据预览 */}
        <div className="divider"></div>
        <div className="bg-base-200 p-4 rounded-box">
          <h2 className="font-bold mb-2">当前表单数据:</h2>
          <pre className="text-sm">{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default FormDemo;