import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { mechanical_services as services } from "@/config/site"
const MechanicalServicesList = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#F2C165] transition-colors">
              <CardHeader>
                <service.icon className="w-10 h-10 text-[#F2C165] mb-2" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MechanicalServicesList

