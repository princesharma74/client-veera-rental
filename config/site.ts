import { Nav } from "@/types";
import { Wrench, Car, PenToolIcon as Tool, Gauge, Battery, Shield } from "lucide-react"

export const navs : Nav[] = [
  { name: "Home", link: "/" },
  { name: "Mechanical Services", link: "/services/mechanical" },
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
