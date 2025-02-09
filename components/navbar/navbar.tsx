"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MobileNav from "./mobilenav";
import Link from "next/link";
import { contactInfo, navs } from "@/config/site";
import { MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <nav
        className={`max-w-7xl mx-auto sm:px-6 lg:px-6 fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 bg-transparent transition-transform duration-300 ease-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <div className="flex items-center justify-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-white font-bold ">
            {navs.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="font-bold text-sm hover:text-secondary"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex gap-2 items-center justify-center">
            <div>
              <Link href={"/vehicles"}>
              <Button variant={"secondary"} className="ml-4 font-semibold">
                Book Now
              </Button>
              </Link>
            </div>
            <div>
              <MobileNav navs={navs}/>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`fixed bottom-4 right-4 z-50 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <Link href={`https://wa.me/${contactInfo.phoneNumber}`}>
        <div className="w-10 h-10 p-2 bg-green-600 text-white rounded-full cursor-pointer hover:bg-yellow-200 hover:text-gray-800">
        <MessageCircle />
        </div></Link>
      </div>
    </>
  );
}
