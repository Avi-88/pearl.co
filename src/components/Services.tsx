"use client"
import React from 'react'
import { useState } from 'react';
import {motion} from 'framer-motion'

function Services() {
    const services = {
        mediate: [
          { title: "Teachers placement", description: "We connect qualified educators with the right institutions" },
          { title: "Buying and selling of educational institutions", description: "Professional mediation services for educational institution transactions" },
          { title: "School vehicles", description: "Assistance in acquiring and managing transportation solutions for schools" }
        ],
        undertake: [
          { title: "Advertisement and ADMISSIONS", description: "Comprehensive admission campaigns and management" },
          { title: "Placements and training of teachers", description: "End-to-end teacher recruitment and professional development" }
        ],
        teach: [
          { title: "High speed communicative English", description: "Accelerated 30-day program (15 days + 10 days + 5 days)" },
          { title: "Classical and cinematic dance", description: "Expert instruction in various dance forms" },
          { title: "Martial Arts", description: "Disciplined training in multiple martial arts systems" }
        ],
        train: [
          { title: "Teaching staff", description: "Professional development for educators" },
          { title: "Non-teaching staff", description: "Specialized training for administrative and support personnel" }
        ],
        provide: [
          { title: "All type of staff", description: "Comprehensive staffing solutions for educational institutions" }
        ]
      };
    
      type ServiceCategory = keyof typeof services;
    
      const [activeTab, setActiveTab] = useState<ServiceCategory>('mediate');
  return (
    <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From mediation to training, we offer a wide range of educational services
        </p>
      </div>

      {/* Service Tabs */}
      <div className="flex flex-wrap justify-center mb-12">
        {Object.keys(services).map((key) => (
          <button
            key={key}
            className={`px-6 py-3 mx-2 my-2 rounded-full font-medium transition-colors duration-300 ${
              activeTab === key 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab(key as ServiceCategory)}
          >
            We {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services[activeTab].map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 h-full flex flex-col justify-between items-start">
                <div className=''>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                </div>
                <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Services