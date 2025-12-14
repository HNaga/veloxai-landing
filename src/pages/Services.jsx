import { useTranslation } from '../i18n';
import { Code2, Zap, Brain, BarChart3, Shield, Cpu } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: Brain,
      title: t('services.ai_automation.title'),
      description: t('services.ai_automation.description'),
    },
    {
      id: 2,
      icon: Code2,
      title: t('services.custom_development.title'),
      description: t('services.custom_development.description'),
    },
    {
      id: 3,
      icon: Zap,
      title: t('services.workflow_optimization.title'),
      description: t('services.workflow_optimization.description'),
    },
    {
      id: 4,
      icon: BarChart3,
      title: t('services.data_analytics.title'),
      description: t('services.data_analytics.description'),
    },
    {
      id: 5,
      icon: Shield,
      title: t('services.security.title'),
      description: t('services.security.description'),
    },
    {
      id: 6,
      icon: Cpu,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('services.header')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('services.subheader')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-slate-700 hover:border-blue-400 group"
                >
                  <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-400">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
