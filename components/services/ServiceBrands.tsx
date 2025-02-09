const brands = ["TOYOTA", "HONDA", "FORD", "MERCEDES", "BMW", "VOLKSWAGEN", "HYUNDAI", "NISSAN"]

const ServiceBrands = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-sm">Brands We Service</div>
        <div>
          <h2 className="text-4xl font-medium mt-4">
            We service all major car brands with{" "}
            <span className="text-gray-500">
              manufacturer-approved parts and procedures
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center mt-5">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center text-gray-400 font-bold hover:text-[#F2C165] transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceBrands

