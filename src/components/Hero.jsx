export default function Hero() {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            🚀 Enterprise AI Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">AI Automation</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master enterprise-scale AI systems, workflow automation, and intelligent agent development. 
            Learn from industry experts building real-world solutions with Oracle, Spring Boot, and React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
              Start Learning
            </a>
            <a href="https://github.com/HNaga" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              View GitHub
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <p className="text-gray-600">Expert Courses</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">99%</div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
