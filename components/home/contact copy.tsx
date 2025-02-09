"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  selectedPackage: z.string().min(1, "Please select a package."),
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().email("Invalid email address."),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const EnquirySection: React.FC = () => {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedPackage: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", userDetails);

      if (response.status === 200) {
        setMessage("We will get back to you soon!");
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
    <section id="contact" className="text-white body-font relative">
      <div className="absolute inset-0 bg-gray-900">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Izmir+(Veera%20Rentals)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-5 py-24 flex z-10">
        <Card className="py-8">
          <CardTitle className="text-gray-900 text-2xl font-semibold title-font mb-5 text-center">
            Get a quote
          </CardTitle>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="selectedPackage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Package</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Fleet Customer Support Management">
                              Fleet Customer Support Management
                            </SelectItem>
                            <SelectItem value="Strategic Fleet Marketing">
                              Strategic Fleet Marketing
                            </SelectItem>
                            <SelectItem value="Digital Marketing">
                              Digital Marketing
                            </SelectItem>
                            <SelectItem value="Website Design">
                              Website Design
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
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
                        <Input placeholder="Doe" {...field} />
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
                        <Input placeholder="example@email.com" {...field} />
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
                        <Input placeholder="1234567890" {...field} />
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
                        <Textarea placeholder="Your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="submit"
                      className="w-full py-2 px-4 bg-brand_blue"
                    >
                      Send message
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{message}</DialogTitle>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnquirySection;
