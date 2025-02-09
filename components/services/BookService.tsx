import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function BookService() {
  return (
    <section id="book" className="relative px-12 py-24 bg-secondary">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6">
        <div className="text-sm">Book Now</div>
        <div>
          <div>
            <h2 className="mt-4 text-4xl font-bold">
              {"Ready to Book Your Service?"}
            </h2>
          </div>
          <p className="mt-2">Professional car care is just a click away. Book your appointment now and keep your vehicle in top condition. Highly-trained mechanical technicians with extensive experience. All repairs and servicing covered by our comprehensive warranty. Only the highest quality manufacturer-approved spare parts used. Quick turnaround times without compromising on quality</p>
          <Link href="/#contact">
            <Button
              variant={"default"}
              className="mt-8 rounded-full font-semibold"
            >
              Book Your Service Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
