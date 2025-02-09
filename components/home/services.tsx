import React from 'react'

const services = [
          {
            title: "Daily Rentals",
            description:
              "Perfect for short trips, business errands, or weekend getaways, our daily rentals provide a convenient solution with flexible terms. Enjoy a wide range of well-maintained vehicles without the hassle of long-term commitments.",
          },
          {
            title: "Private Rentals",
            description: "Need a vehicle for an extended period? Our private rentals offer a reliable and budget-friendly option. Ideal for personal use, temporary needs, or long-term projects, we ensure you stay on the road comfortably and confidently.",
          },
          {
            title: "Rent-to-Own",
            description: "Our rent-to-own program makes car ownership achievable and stress-free. Drive the car you want while making payments that lead to full ownership over time. No large upfront costs, just an affordable path to owning your dream vehicle.",
          },
          {
            title: "Rideshare Rentals",
            description: "Are you a rideshare driver on platforms like Uber or Lyft? We’ve got you covered with fuel-efficient, hybrid, and dependable cars designed to help you earn more. Enjoy a seamless driving experience with rentals built for your business success.",
          },
]


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

      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 grid grid-cols-2 gap-16 mt-16">
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
