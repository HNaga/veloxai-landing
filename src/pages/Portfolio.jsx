import { useTranslation } from '../i18n';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.description'),
      image: 'https://via.placeholder.com/400x300?text=Enterprise+AI+System',
      technologies: ['Python', 'TensorFlow', 'FastAPI'],
      link: '#',
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description'),
      image: 'https://via.placeholder.com/400x300?text=Workflow+Automation',
      technologies: ['n8n', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.description'),
      image: 'https://via.placeholder.com/400x300?text=Data+Analytics+Dashboard',
      technologies: ['React', 'D3.js', 'Python'],
      link: '#',
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.description'),
      image: 'https://via.placeholder.com/400x300?text=Mobile+App+Development',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('portfolio.header')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('portfolio.subheader')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-blue-400 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
