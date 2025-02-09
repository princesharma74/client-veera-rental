import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function TrustPitch() {
  return (
    <section id="book" className="relative px-12 py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6">
        <div className="text-sm">Book Now</div>
        <div>
          <div>
            <h2 className="mt-4 text-4xl font-bold">
              {"Car rental partners you can trust"}
            </h2>
          </div>
          <div className="font-bold mt-4">
            SUV | Sedan | Luxury | Van | Six Seater
          </div>
          <p className="mt-2">
            We&apos;ve built lasting relationships through reliable services and
            top-quality vehicles. Our goal is to make every ride smooth,
            reliable, and stress-free. Whether you need a car for a day or a
            partner for the long haul, we&apos;re here to meet your driving
            needs with professionalism and care.
          </p>
          <Link href="/vehicles">
            <Button
              variant={"secondary"}
              className="mt-8 rounded-full font-semibold"
            >
              Book Your Vehicle Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
