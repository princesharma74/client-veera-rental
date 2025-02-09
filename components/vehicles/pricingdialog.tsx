"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, DollarSign } from "lucide-react";

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

interface PricingDialogProps {
  dailyRate: number;
  deposit: number;
  weeklyRate: number;
  minimumDays?: number;
}

const PricingDialog: React.FC<PricingDialogProps> = ({
  dailyRate,
  deposit,
  weeklyRate,
  minimumDays = 7,
}) => {
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  const calculatePricing = () => {
    if (!pickupDate || !returnDate) return "Please select both dates.";

    const pickup = new Date(pickupDate);
    const returnDay = new Date(returnDate);

    if (pickup >= returnDay) return "Invalid date range.";

    const dayDifference = Math.ceil(
      (returnDay.getTime() - pickup.getTime()) / (1000 * 60 * 60 * 24)
    );

    const isShortBooking = dayDifference < minimumDays;
    const rentRate = isShortBooking ? weeklyRate : dailyRate;
    const rent = rentRate * dayDifference;

    return `Rent: $${rent} (${rentRate}/day) \nDeposit: $${deposit} (Refundable) \nEstimated amount payable: $${
      rent + deposit
    }`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-3 bg-secondary rounded-none text-black hover:bg-secondary-dark hover:text-white">
          <div className="flex justify-center items-center gap-2">
            <div>
              <DollarSign size={20} />
            </div>
            <div>Check Pricing</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">
            ${dailyRate}/day
            <p className="text-xs text-gray-500">
              For booking more than {minimumDays} days. Otherwise ${weeklyRate}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingDialog;
