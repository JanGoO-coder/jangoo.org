"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";

// Form validation schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(255),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(255),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Please select a subject").max(255),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const ContactSection = () => {
  const [mounted, setMounted] = useState(false);
  // State to manage form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Web Development",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset(); // Reset form after successful submission
      } else {
        toast.error(
          "An error occurred while sending the message. Please try again later."
        );
        console.log(response);
      }
    } catch (error) {
      toast.error(
        "An error occurred while sending the message. Please try again later." +
          error
      );
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <section id="contact" className="container py-24 sm:py-32 scroll-mt-20">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information Section */}
            <div>
              <div className="mb-4">
                <h2 className="text-lg text-primary mb-2 tracking-wider">
                  Contact
                </h2>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Connect With Us
                </h2>
              </div>
              <p className="mb-8 text-muted-foreground lg:w-5/6">
                Ready to take your project to the next level? Reach out and
                let&apos;s make something amazing together!
              </p>

              {/* Contact Details */}
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-2 mb-1">
                    <Phone />
                    <div className="font-bold">Call us</div>
                  </div>
                  <div>+92 304 3388800</div>
                </div>

                <div>
                  <div className="flex gap-2 mb-1">
                    <Mail />
                    <div className="font-bold">Mail US</div>
                  </div>
                  <div>asadalijangoo@gmail.com</div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <Clock />
                    <div className="font-bold">Availability</div>
                  </div>

                  <div>
                    <div>Monday - Friday</div>
                    <div>8AM - 4PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <Card className="bg-white dark:bg-card">
              <CardHeader className="text-primary text-2xl"> </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid w-full gap-4"
                  >
                    {/* Name Fields */}
                    <div className="flex flex-col md:!flex-row gap-8">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>First Name</FormLabel>
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
                          <FormItem className="w-full">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1.5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john.doe@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a subject" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Web Development">
                                  Web Development
                                </SelectItem>
                                <SelectItem value="Mobile Development">
                                  Mobile Development
                                </SelectItem>
                                <SelectItem value="Figma Design">
                                  Figma Design
                                </SelectItem>
                                <SelectItem value="REST API">
                                  REST API
                                </SelectItem>
                                <SelectItem value="FullStack Project">
                                  FullStack Project
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex flex-col gap-1.5">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 !bg-primary !text-primary-foreground hover:!bg-primary/90"
                    >
                      {isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>

              <CardFooter></CardFooter>
            </Card>
          </section>
        </section>
      )}
    </>
  );
};
