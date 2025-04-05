import React from 'react'

function About() {
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <img 
            src="/api/placeholder/600/400" 
            alt="About us" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Partner in Educational Excellence</h2>
          <p className="text-gray-600 mb-6">
            We are a comprehensive educational consultancy agency dedicated to improving the quality of education through our diverse range of services. With years of experience in the education sector, we understand the unique challenges faced by institutions and educators.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of experts works tirelessly to provide tailored solutions that meet the specific needs of our clients, ensuring excellence in every aspect of educational services.
          </p>
          <a href="#services" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300">
            Discover How We Can Help
          </a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About