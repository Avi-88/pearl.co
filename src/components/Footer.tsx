import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduConsult Pro</h3>
              <p className="text-gray-400">
                Your trusted partner for educational consultancy, placement, and training services.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">We Mediate</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">We Undertake</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">We Teach</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">We Train</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">We Provide</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <span>FB</span>
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <span>TW</span>
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <span>IG</span>
                </a>
                <a href="#" className="bg-blue-800 hover:bg-blue-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <span>LI</span>
                </a>
              </div>
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 EduConsult Pro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer