export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About AIAA</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI Automation Academy is founded by industry experts with deep experience in enterprise system architecture, 
              AI integration, and business process automation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We've built and deployed production systems for enterprises, created intelligent automation workflows, 
              and trained hundreds of developers in cutting-edge technologies.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Industry experts with 10+ years experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Real-world project examples and case studies</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✓</span>
                <span className="text-gray-700">Active community and peer support</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Tech Stack</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold mb-2">Oracle Database & AI</div>
                <div className="w-full bg-blue-400 rounded h-2"></div>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">Spring Boot & Java</div>
                <div className="w-full bg-blue-400 rounded h-2"></div>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">React & Frontend</div>
                <div className="w-full bg-blue-400 rounded h-2"></div>
              </div>
              <div>
                <div className="text-sm font-semibold mb-2">AI Agents & Automation</div>
                <div className="w-full bg-blue-400 rounded h-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
