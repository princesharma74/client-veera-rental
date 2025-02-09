'use client'
import {
    Armchair,
    CarFront,
    ChartBarStacked,
    Fuel,
    Palette,
    Phone,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { CarDetailsType } from "@/types";
import { Button } from "../ui/button";
import PricingDialog from "./pricingdialog";
import { getImageURL } from "@/lib/db";

interface CarDetailsProps {
    carDetails: CarDetailsType;
}

const CarCard: React.FC<CarDetailsProps> = ({
    carDetails
}) => {

    const {
        collectionId,
        id,
        brand,
        model,
        year,
        color,
        fuel_type,
        category,
        seats,
        daily_price,
        weekly_price,
        deposit,
        images,
        status,
        additional_info,
    } = carDetails;

    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const handleNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handlePrevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-64 lg:h-80">
                    <Image
                        src={getImageURL(collectionId, id, images[currentImageIndex])}
                        alt="Car Image"
                        layout="fill"
                        objectFit="cover"
                        className="pointer-events-none select-none rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3 text-3xl font-bold z-10">
                        <div className="flex items-end text-white font-extrabold">
                            <div>${daily_price}</div>
                            <div className="text-xs font-extralight">/DAY</div>
                        </div>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                        <Button variant={status == "Available" ? "secondary" : "destructive"}>{status}</Button>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-t-lg"></div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                        <div className="text-white font-bold text-2xl">
                            {`${brand} ${model} ${year}`}
                        </div>
                        <div className="text-white text-sm">
                            {isExpanded
                                ? additional_info
                                : additional_info.slice(0, 50) + "..."}
                            <span
                                onClick={toggleExpand}
                                className="text-secondary cursor-pointer ml-1"
                            >
                                {isExpanded ? "Less" : "More"}
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={handlePrevImage}
                        disabled={currentImageIndex === 0}
                        className={`absolute left-2 top-1/2 transform -translate-y-1/2 ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronLeft size={30} />
                    </button>
                    <button
                        onClick={handleNextImage}
                        disabled={currentImageIndex === images.length - 1}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${currentImageIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <ChevronRight size={30} />
                    </button>
                </div>
                <div className="w-full grid grid-cols-5 divide-x divide-gray-500 my-2">
                    <div className="flex flex-col justify-between items-center w-full p-2">
                        <Palette size={25} />
                        <div className="text-xs">{color}</div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full p-2">
                        <Fuel size={25} />
                        <div className="text-xs">{fuel_type}</div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full p-2">
                        <ChartBarStacked size={25} />
                        <div className="text-xs">{category}</div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full p-2">
                        <Armchair size={25} />
                        <div className="text-xs">{seats}</div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-full p-2">
                        <CarFront size={25} />
                        <div className="text-xs">{category}</div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="grid grid-cols-2 border-gray-500 w-full">
                        <Button className="p-3 bg-green-500 rounded-none text-black hover:bg-green-600 hover:text-white">
                            <div className="flex justify-center items-center gap-2">
                                <Phone size={20} />
                                <div>Call</div>
                            </div>
                        </Button>
                        <PricingDialog dailyRate={daily_price} deposit={deposit} weeklyRate={weekly_price}/>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default CarCard;
