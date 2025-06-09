export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
                <p className="text-sm">&copy; 2025 Sikha Chauhan — Software Developer</p>
                {/* <p className="text-xs text-gray-400">Built with Next.js & Tailwind CSS</p> */}
            </div>

            <div className="flex space-x-6">
                <a href="https://github.com/sikhachauhan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/sikhachauhan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                    LinkedIn
                </a>
                <a href="mailto:csikha1010@gmail.com" className="hover:text-red-500 transition-colors">
                    Email
                </a>
            </div>
        </div>
    </footer>
    )
}
