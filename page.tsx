import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Search, ChevronRight } from "lucide-react"

export default function VinDecoder() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="text-xl font-semibold">VIN DecodeX</div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-sm">
            About Us
          </a>
          <a href="#" className="text-sm">
            How it Works
          </a>
          <a href="#" className="text-sm">
            Company
          </a>
          <a href="#" className="text-sm">
            Reviews
          </a>
          <Button variant="outline" className="ml-4">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIN%20DecodeX%20Design-ERrhpDBaWH6ksxg4AOwxwXx3J4kO0L.webp"
          alt="Car Interior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center px-12 bg-black/30">
          <h1 className="max-w-2xl text-5xl font-bold text-white">Unlock the full history of vehicle</h1>
          <div className="flex items-center gap-2 mt-8">
            <Button className="gap-2 pl-6 pr-8">
              Check my VIN
              <Search className="w-4 h-4" />
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/80">(Explore more)</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-12 py-24">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Instant, accurate, and reliable
              <br />
              reports of any vehicle you want
              <br />
              at your fingertips
            </h2>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
          </div>
          <p className="max-w-xs text-sm text-gray-600">
            Our professional team helps you to make an informed decision before bidding on any vehicle.
          </p>
        </div>

        <div className="relative mt-12 h-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=800"
            alt="Mercedes AMG"
            width={800}
            height={500}
            className="object-cover rounded-lg"
          />
          <Card className="absolute left-0 top-1/4 max-w-xs p-4 bg-white/90 backdrop-blur">
            <h3 className="font-semibold">Easy to Use</h3>
            <p className="mt-2 text-sm text-gray-600">
              Simply enter the vehicle's VIN, and receive a detailed report in minutes.
            </p>
          </Card>
        </div>

        <div className="flex items-center justify-between mt-16">
          <Image src="/placeholder.svg?height=30&width=100" alt="Subaru" width={100} height={30} />
          <Image src="/placeholder.svg?height=30&width=100" alt="Nissan" width={100} height={30} />
          <Image src="/placeholder.svg?height=30&width=100" alt="Lexus" width={100} height={30} />
          <Image src="/placeholder.svg?height=30&width=100" alt="Hyundai" width={100} height={30} />
          <Image src="/placeholder.svg?height=30&width=100" alt="Toyota" width={100} height={30} />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-12 py-24 bg-gray-50">
        <span className="text-sm font-medium">How it Works</span>
        <h2 className="mt-4 text-4xl font-bold">
          Get your vehicle
          <br />
          history in hand with
          <br />
          only 3 simple steps
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            {
              number: "01",
              title: "Enter the VIN",
              description:
                "Locate the VIN (usually found on the dashboard near the windshield or door frame) and enter it into our search bar",
            },
            {
              number: "02",
              title: "Run the Report",
              description: "Click to generate your comprehensive vehicle history report",
            },
            {
              number: "03",
              title: "Receive the Full Report",
              description: "Get instant access to detailed vehicle information",
            },
          ].map((step) => (
            <div key={step.number} className="space-y-4">
              <span className="text-sm text-gray-500">{step.number}</span>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Report Features Section */}
      <section className="px-12 py-24 bg-black text-white">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-sm font-medium">VIN Report</span>
            <h2 className="mt-4 text-4xl font-bold">
              Let's know more about what's
              <br />
              included in our VIN report
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Enter the VIN" className="px-4 py-2 bg-white/10 rounded-lg" />
            <Button>
              Check Now
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mt-16">
          {[
            {
              title: "Accident History",
              description:
                "Find out if the car has been involved in accidents, including the severity and extent of damages.",
            },
            {
              title: "Title and Registration Status",
              description: "Check if the vehicle has been stolen, salvaged, rebuilt, or branded as a lemon.",
            },
            {
              title: "Odometer Verification",
              description: "Verify the accuracy of the mileage to ensure it hasn't been tampered with or rolled back.",
            },
            {
              title: "Service and Maintenance Records",
              description: "Access maintenance and repair history to understand how well the vehicle is maintained.",
            },
          ].map((feature, index) => (
            <div key={index} className="space-y-4">
              <span className="text-sm text-gray-400">({(index + 1).toString().padStart(2, "0")})</span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-bold">10%</span>
            <p className="text-sm text-gray-400">
              Estimated increase in vehicle value
              <br />
              by adding our VIN check report
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-12 py-24">
        <span className="text-sm font-medium">Customer Testimonials</span>
        <h2 className="mt-4 text-4xl font-bold">
          Hear what our
          <br />
          customers say
        </h2>
      </section>
    </div>
  )
}

