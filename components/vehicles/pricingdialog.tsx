"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, DollarSign } from "lucide-react";
import { contactInfo } from "@/config/site";

import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface PricingDialogProps {
  carName: string,
  dailyRate: number;
  deposit: number;
  weeklyRate: number;
  minimumDays?: number;
}

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const PricingDialog: React.FC<PricingDialogProps> = ({
  carName,
  dailyRate,
  deposit,
  weeklyRate,
  minimumDays = 7,
}) => {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [message, setMessage] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const calculatePricing = () => {
    if (!pickupDate || !returnDate) return "Please select both dates.";

    const pickup = new Date(pickupDate);
    const returnDay = new Date(returnDate);

    if (pickup >= returnDay) return "Invalid date range.";

    const dayDifference = Math.ceil(
      (returnDay.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)
    );

    const isShortBooking = dayDifference < minimumDays;
    const rentRate = isShortBooking ? dailyRate : weeklyRate;
    const rent = rentRate * dayDifference;

    return `Pickup Date: ${format(pickup, 'dd/MM/yyyy')}\nReturn Date: ${format(returnDate, 'dd/MM/yyyy')}\nRent: $${rent.toFixed(2)} (${rentRate.toFixed(2)}/day) \nDeposit: $${deposit} (Refundable) \nEstimated amount payable: $${
      ( rent + deposit ).toFixed(2)
    }`;
  };

  const getMessage = (userDetails: FormData) => {
    return `Selected Car: ${carName}\nCalculated Pricing: ${calculatePricing()}\nMessage: ${userDetails.message}`
  }

  const sendWhatsAppMessage = () => {
      // const message = `Hello, I want to rent ${carName}. Here are details I found on your website ${getMessage(userDetails)}. Could you provide more details?`;
      const message = `Hello, I want to rent ${carName}. Here are details I found on your website: Calculated Pricing: ${calculatePricing()}. Could you provide more details?`;
      const url = `https://wa.me/${contactInfo.phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
  };


  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", {
        ...userDetails,
        selectedPackage: 'Daily Rentals',
        message: getMessage(userDetails)
      });

      if (response.status === 200) {
        setMessage("We've received your message. We will get back to you soon!");
        console.log("Email sent successfully:", response.data);
      } else {
        setMessage("Failed! Please directly email or call.");
        console.error("Failed to send email:", response.data);
      }
    } catch (error: unknown) {
      setMessage("Failed! Please directly email or call.");

      if (axios.isAxiosError(error)) {
        // If the error is from Axios, log the response or message
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        // Handle a standard JavaScript Error
        console.error("Error submitting contact form:", error.message);
      } else {
        // Handle unexpected error types
        console.error("Unexpected error:", error);
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-3 bg-secondary rounded-none text-black hover:bg-secondary-dark hover:text-white">
          <div className="flex justify-center items-center gap-2">
            <div>
              <DollarSign size={20} />
            </div>
            <div>Book Now</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            ${weeklyRate.toFixed(2)}/day
            <p className="text-xs text-gray-500">
              For booking more than {minimumDays} days. Otherwise ${dailyRate}
              /day is applicable.
            </p>
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Popover modal>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2" />
                  {pickupDate ? format(pickupDate, "PPP") : "Pickup Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 z-50"
                align="start"
                sideOffset={4}
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar
                  mode="single"
                  selected={pickupDate}
                  onSelect={setPickupDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Popover modal>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2" />
                  {returnDate ? format(returnDate, "PPP") : "Return Date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0 z-50"
                align="start"
                sideOffset={4}
                onClick={(e) => e.stopPropagation()}
              >
                <Calendar
                  mode="single"
                  selected={returnDate}
                  onSelect={setReturnDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="mt-2 bg-gray-100 p-4 rounded-md">
            <pre className="whitespace-pre-wrap font-mono text-sm">
              {calculatePricing()}
            </pre>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input className="border-white" placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input className="border-white" placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="border-white" placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input className="border-white" placeholder="1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea className="border-white" placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                  <div className="flex flex-col gap-2">
                    <Button
                    variant={"secondary"}
                      type="submit"
                      className="w-full py-2 px-4"
                    >
                      Send message
                    </Button>
                    <Button
                      type="submit"
                      className="w-full py-2 px-4 bg-green-500"
                      onClick={() => sendWhatsAppMessage()}
                    >
                    Reach out to us on WhatsApp
                    </Button>
                  </div>
                  <div className="text-blue-500 w-full text-center">{message}</div>
              </form>
            </Form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
