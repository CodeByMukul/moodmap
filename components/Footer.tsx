
"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#2A0C44] text-gray-400 py-8"> {/* Lighter Purple Background */}
      <div className="container mx-auto px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Adjusted spacing between sections */}
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              {/* MoodMap Custom Logo */}
              <div className="h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="url(#gradient)"
                  className="h-8 w-8"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ff80c0" />
                      <stop offset="100%" stopColor="#9156ec" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5h4v-2h-4v2zm1-4h2v-6h-2v6z" />
                </svg>
              </div>
              {/* Gradient Text for MoodMap */}
              <span className="text-xl font-semibold bg-gradient-to-r from-[#ff80c0] to-[#9156ec] bg-clip-text text-transparent">
                MoodMap
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering individuals to explore emotional wellness through mindfulness and personalized insights.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff80c0] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          <p>&copy; 2025 MoodMap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



