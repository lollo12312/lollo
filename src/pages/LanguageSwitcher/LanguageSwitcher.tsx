import useLanguageStore from '../../store/useLanguageStore';

const LanguageSwitcher = () => {
  const { language, setLanguage, translations } = useLanguageStore();
  const t = translations[language];

  return (
    <div className="p-8 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t.greeting}</h1>
        
        <p className="mb-6">{t.content}</p>
        
        <button
          onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
          className="btn btn-primary"
        >
          {t.buttonText}
        </button>
        
        <div className="mt-6 p-4 bg-base-200 rounded-box">
          <h2 className="font-bold mb-2">当前语言状态:</h2>
          <p>语言代码: {language}</p>
          <p>语言名称: {language === 'zh' ? '中文' : 'English'}</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;