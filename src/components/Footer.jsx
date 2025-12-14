export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">VeloXAI</h4>
            <p className="text-sm">Enterprise AI Automation Academy</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Courses</a></li>
              <li><a href="https://github.com/HNaga" target="_blank" rel="noopener noreferrer" className="hover:text-white">Projects</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/HNaga" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/hisham-abulnaga-219a28112/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Udemy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">h.abulnaga@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 AI Automation Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
