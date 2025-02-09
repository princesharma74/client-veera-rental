import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "This service is amazing! Highly recommend to everyone.",
      image: "/path/to/john-doe.jpg"
    },
    {
      name: "Jane Smith",
      feedback: "A wonderful experience from start to finish.",
      image: "/path/to/jane-smith.jpg"
    },
    {
      name: "Sam Wilson",
      feedback: "Exceptional quality and customer service.",
      image: "/path/to/sam-wilson.jpg"
    }
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-12 py-24">
      <span className="text-sm font-medium">Customer Testimonials</span>
      <h2 className="mt-4 text-4xl font-bold">
        Hear what our customers say
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="mt-4 text-xl font-semibold text-center">
              {testimonial.name}
            </h3>
            <p className="mt-2 text-gray-600 text-center">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
