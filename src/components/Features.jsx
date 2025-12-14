export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Agents & Automation",
      description: "Build autonomous AI agents using CrewAI, n8n, and advanced prompt engineering"
    },
    {
      icon: "🏢",
      title: "Enterprise Architecture",
      description: "Design scalable systems with Oracle, Spring Boot, and cloud-native patterns"
    },
    {
      icon: "⚙️",
      title: "Workflow Automation",
      description: "Create intelligent workflows that eliminate manual processes and save costs"
    },
    {
      icon: "🔗",
      title: "API Development",
      description: "Master REST APIs with ORDS, Spring Boot, and microservices architecture"
    },
    {
      icon: "📊",
      title: "Database Mastery",
      description: "Optimize Oracle databases with advanced SQL, PL/SQL, and AI features"
    },
    {
      icon: "🚀",
      title: "Full-Stack Development",
      description: "Build complete applications with React, Spring Boot, and Docker"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">What You'll Master</h2>
          <p className="text-xl text-gray-600">Comprehensive training in modern AI and enterprise technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
