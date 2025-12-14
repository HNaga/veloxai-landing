export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-900">
      <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
        <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Skills?</h2>
        <p className="text-xl opacity-90">Join hundreds of professionals mastering AI automation and enterprise systems</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
            Explore Courses
          </a>
          <a href="https://www.linkedin.com/in/hisham-abulnaga-219a28112/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition">
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
