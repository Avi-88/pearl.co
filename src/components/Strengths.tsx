import React from 'react'

function Strengths() {
  return (
    <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              We bring expertise, dedication, and a personalized approach to every service we offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Team",
                description: "Our team consists of experienced educators and industry professionals"
              },
              {
                icon: "🔄",
                title: "End-to-End Solutions",
                description: "Comprehensive services covering all aspects of educational needs"
              },
              {
                icon: "🚀",
                title: "Fast Results",
                description: "Efficient processes designed to deliver quick and effective outcomes"
              },
              {
                icon: "🤝",
                title: "Personalized Approach",
                description: "Tailored solutions that meet your specific requirements"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-800/50 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Strengths