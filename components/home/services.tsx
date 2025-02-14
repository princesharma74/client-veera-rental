import React from 'react'
import { services } from '@/config/site'


export default function Services() {
  return (
    <section id="services" className="px-12 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 flex justify-between items-start">
        <div>
          <span className="text-sm font-medium text-secondary">Services</span>
          <h2 className="mt-4 text-4xl font-bold">
            Let&apos;s know more about what services we offer
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
        {services.map((feature, index) => (
          <div key={index} className="space-y-4">
            <span className="text-sm text-gray-400 text-secondary">({(index + 1).toString().padStart(2, "0")})</span>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

  )
}
