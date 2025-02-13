import { Nav } from "@/types";
import { Wrench, Car, PenToolIcon as Tool, Gauge, Battery, Shield } from "lucide-react"

export const navs : Nav[] = [
  { name: "Home", link: "/" },
  { name: "Mechanical Services", link: "/mechanical" },
  { name: "About", link: "/#about" },
  { name: "Testimonials", link: "/#testimonials" },
  { name: "Contact", link: "/#contact" },
];

export const mechanical_services = [
  {
    icon: Car,
    title: "Log Book Service",
    description:
      "Full suite of servicing options for both new and old vehicles with high-quality fluids and lubricants.",
  },
  {
    icon: Tool,
    title: "Major Car Service",
    description: "Comprehensive service to improve vehicle performance and extend its lifetime.",
  },
  {
    icon: Wrench,
    title: "Minor Car Service",
    description: "Regular maintenance including brake inspection, battery testing, and fluid replacements.",
  },
  {
    icon: Gauge,
    title: "Computer Diagnostics",
    description: "Advanced computer diagnostics to detect and resolve potential issues.",
  },
  {
    icon: Battery,
    title: "Auto Electrical",
    description: "Complete electrical system diagnosis and repair services.",
  },
  {
    icon: Shield,
    title: "Warranty Service",
    description: "Maintain your manufacturer's warranty with our certified service center.",
  },
]

export const contactInfo = {
  phoneNumber: '+61466877527',
  address: '53/24 Jutland Way, Epping VIC 3076, Australia',
  emailId: 'veerarentals@gmail.com'
}

export const services = [
          {
            title: "Daily Rentals",
            href: "/vehicles",
            description:
              "Perfect for short trips, business errands, or weekend getaways, our daily rentals provide a convenient solution with flexible terms. Enjoy a wide range of well-maintained vehicles without the hassle of long-term commitments.",
          },
          {
            title: "Private Rentals",
            href: "/vehicles",
            description: "Need a vehicle for an extended period? Our private rentals offer a reliable and budget-friendly option. Ideal for personal use, temporary needs, or long-term projects, we ensure you stay on the road comfortably and confidently.",
          },
          {
            title: "Rent-to-Own",
            href: "/vehicles",
            description: "Our rent-to-own program makes car ownership achievable and stress-free. Drive the car you want while making payments that lead to full ownership over time. No large upfront costs, just an affordable path to owning your dream vehicle.",
          },
          {
            title: "Rideshare Rentals",
            href: "/vehicles",
            description: "Are you a rideshare driver on platforms like Uber or Didi? We’ve got you covered with fuel-efficient, hybrid, and dependable cars designed to help you earn more. Enjoy a seamless driving experience with rentals built for your business success.",
          },
          {
            title: "Wedding Cars",
            href: "/vehicles",
            description: "Arrive in style with our luxury wedding car services, featuring Lexus and a wide range of premium vehicles. Make your special day unforgettable with elegance and comfort.",
          },
          {
            title: "Mechanical Services/Automative",
            href: "/services/mechanical",
            description: "We provide top-quality mechanical and automotive services, ensuring your vehicles are well-maintained, safe, and running smoothly. Our expert team specializes in repairs, servicing, and diagnostics for all vehicle types.",
          }
]