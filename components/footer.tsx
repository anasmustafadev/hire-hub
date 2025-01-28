import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">HireHub</h3>
            <p className="text-gray-400">Connecting Talent, Growing Businesses</p>
            <p className="text-sm text-gray-500 mt-4">
              Empowering companies and job seekers to achieve their goals through seamless recruitment solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Phone: +92 321-7975-701</p>
            <p className="text-gray-400">Email: hirehub42@gmail.com</p>
            <p className="text-sm text-gray-500 mt-4">
              Available Monday to Friday, 9:00 AM - 6:00 PM.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="group text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Facebook className="group-hover:fill-current" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="group text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="group-hover:fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrehman-sohail/"
                aria-label="LinkedIn"
                className="group text-gray-400 hover:text-blue-500 transition-colors"
              >
                <LinkedIn className="group-hover:fill-current" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="group text-gray-400 hover:text-pink-600 transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="mailto:abdulrehmansohail451@gmail.com"
                aria-label="Email"
                className="group text-gray-400 hover:text-red-600 transition-colors"
              >
                <Mail />
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Stay connected for updates, news, and career opportunities.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HireHub. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">
            Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

