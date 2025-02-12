"use client";
import { CarDetailsType } from "@/types";
import CarCard from "@/components/vehicles/carcard";
import { useEffect, useState } from "react";

import { pb } from "@/lib/db";
import Header from "@/components/header";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Loader from "@/components/loader";

const Page = () => {
  const [cars, setCars] = useState<CarDetailsType[]>([]);
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    keywords: "",
    seats: "",
    brand: "",
    bodyType: "",
    fuelType: "",
    priceOrder: "low-to-high",
  });

  const buildFilterString = () => {
    const filterParts = [];
    if (filters.keywords) filterParts.push(`keywords ~ "${filters.keywords}"`);
    if (filters.seats) filterParts.push(`seats == ${filters.seats}`);
    if (filters.brand) filterParts.push(`brand == "${filters.brand}"`);
    if (filters.bodyType) filterParts.push(`bodyType == "${filters.bodyType}"`);
    if (filters.fuelType) filterParts.push(`fuelType == "${filters.fuelType}"`);
    if (filters.priceOrder === "low-to-high") {
      filterParts.push(`priceOrder == "low-to-high"`);
    } else {
      filterParts.push(`priceOrder == "high-to-low"`);
    }
    return filterParts.join(" && ");
  };

  const fetchCarDetails = async (page: number) => {
    if (!process.env.NEXT_PUBLIC_API_URL) {
      console.error("API URL is missing");
      return;
    }

    try {
      const filterString = buildFilterString();
      const resultList = await pb.collection("cars").getList(page, 10); // Fetch 10 cars per page
      const transformedCars: CarDetailsType[] = resultList.items.map(
        (item: any) => ({
          id: item.id,
          KMs: item.KMs,
          additional_info: item.additional_info,
          body_type: item.body_type,
          brand: item.brand,
          color: item.color,
          description: item.description,
          fuel_type: item.fuel_type,
          image_url: item.image_url,
          model: item.model,
          daily_price: item.daily_price,
          weekly_price: item.weekly_price,
          seats: item.seats,
          transmission: item.transmission,
          images: item.images,
          deposit: item.deposit,
          status: item.status,
          year: item.year,
          collectionId: item.collectionId, // Ensure this property exists in item
          category: item.category, // Ensure this property exists in item
          collectionName: item.collectionName, // Ensure this property exists in item
          created: item.created,
          updated: item.updated,
        })
      );
      setCars(transformedCars);
      setTotalPages(resultList.totalPages);
      setLoading(false)
    } catch (error) {
      console.error("Failed to fetch car details:", error);
    }
  };

  useEffect(() => {
    fetchCarDetails(page);
  }, [page, filters]);

  const handlePageChange = (newPage: number, event: React.MouseEvent) => {
    event.preventDefault();
    setPage(newPage);
  };

  /*
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  */

  return (
    <>
      <Header image="/steering_interior3.jpg">Browse our fleet</Header>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 my-10 flex flex-col justify-between">
        {/* <div className="mb-4">
          <input
            type="text"
            name="keywords"
            placeholder="Keywords"
            value={filters.keywords}
            onChange={handleFilterChange}
            className="mr-2 p-2 border"
          />
          <input
            type="number"
            name="seats"
            placeholder="Seats"
            value={filters.seats}
            onChange={handleFilterChange}
            className="mr-2 p-2 border"
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={filters.brand}
            onChange={handleFilterChange}
            className="mr-2 p-2 border"
          />
          <input
            type="text"
            name="bodyType"
            placeholder="Body Type"
            value={filters.bodyType}
            onChange={handleFilterChange}
            className="mr-2 p-2 border"
          />
          <input
            type="text"
            name="fuelType"
            placeholder="Fuel Type"
            value={filters.fuelType}
            onChange={handleFilterChange}
            className="mr-2 p-2 border"
          />
          <select
            name="priceOrder"
            value={filters.priceOrder}
            onChange={handleFilterChange}
            className="p-2 border"
          >
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div> */}
        {
          loading ? <Loader/> : 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cars.map((car) => (
              <CarCard key={car.id} carDetails={car} />
            ))}
          </div>
        }
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => handlePageChange(Math.max(page - 1, 1), e)}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    isActive={page === index + 1}
                    onClick={(e) => handlePageChange(index + 1, e)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) =>
                    handlePageChange(Math.min(page + 1, totalPages), e)
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Page;
