import React from 'react'

function Testimonials() {

    const testimonials = [
        {
          quote: "Working with this agency transformed our recruitment process. We found qualified teachers who perfectly matched our school's ethos.",
          author: "Sarah Johnson",
          position: "Principal, International School"
        },
        {
          quote: "The English communication training program significantly improved our teachers' skills. The accelerated format was highly effective.",
          author: "Dr. Michael Patel",
          position: "Director of Education, Learning Academy"
        },
        {
          quote: "Their mediation services made the process of acquiring another institution seamless and transparent. Highly recommended!",
          author: "Jennifer Williams",
          position: "CEO, Education Group"
        }
      ];

  return (
    <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Hear from educational institutions and professionals who have partnered with us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 text-4xl mb-4">`&#34;`</div>
            <p className="text-gray-600 mb-6 italic">{item.quote}</p>
            <div>
              <p className="font-bold text-gray-800">{item.author}</p>
              <p className="text-gray-500">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials