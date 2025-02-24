import Link from "next/link"
import { Facebook, Instagram, Phone, Mail, MapPin, Divide } from "lucide-react"
import { contactInfo, services } from "@/config/site"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#F2C165]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mechanical" className="hover:text-[#F2C165]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-[#F2C165]">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#F2C165]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) =>(
                <li key={item.title}>
                  <Link href={item.href} className="hover:text-[#F2C165]">
                  {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href={`tel:${contactInfo.phoneNumber.toString().replace("+61", "0")}`} className="hover:text-[#F2C165]">
                  {contactInfo.phoneNumber.toString().replace("+61", "0")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@veerarentals.com" className="hover:text-[#F2C165]">
                {contactInfo.emailId}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572318222083" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2C165]">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={`https://wa.me/${contactInfo.phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F2C165]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; 2025 Veera Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

