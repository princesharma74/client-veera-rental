import Header from "@/components/header";
import { AboutUs } from "@/components/services/AboutUs";
import BookService from "@/components/services/BookService";
import MechanicalServicesList from "@/components/services/MechanicalServicesList";
import ServiceBrands from "@/components/services/ServiceBrands";

const Page = () => {
  return (
    <div>
      <Header image="/car_maintenance_background.jpg">
        Mechanical Services
      </Header>
      <AboutUs />
      <MechanicalServicesList />
      <ServiceBrands />
      <BookService />
    </div>
  );
};

export default Page;
