import { useTranslation } from '../i18n';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Welcome to VeloXAI</h1>
          <p className="text-xl text-slate-300 mb-8">Enterprise AI & Automation Solutions</p>
          <a href="/services" className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  );
}
