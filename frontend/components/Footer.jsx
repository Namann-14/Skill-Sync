import { Twitter, MessageCircle, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-500/20 py-8 z-[101]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkillSync</h3>
            <p className="text-gray-400">
              Revolutionizing career growth with blockchain and AI-powered resume and GitHub analysis.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="/features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="/pricing" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/docs" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="/faq" className="hover:text-blue-400 transition">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://discord.com" className="text-gray-400 hover:text-blue-400 transition">
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SkillSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
