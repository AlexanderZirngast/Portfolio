"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ScrollFadeIn from "./ScrollFadeIn";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Please enter your full name.",
  }),
  email: z.email("Invalid email address"),
  message: z.string().min(8, {
    message: "Message must be at least 8 characters.",
  }),
});
export default function ContactForm() {
  type FormValues = z.infer<typeof formSchema>;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [error, setError] = useState<string>("")

  async function  onSubmit(data: FormValues) {
    console.log(data);

      try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Successfully send message");
      } 
    } catch (error) {
      setError(error as string)
      toast.error('Could not send message');
    }

  }
  return (
    <ScrollFadeIn>
      <div
        id="contact-section"
        className="max-w-6xl  sm:px-4 sm:py-6 mx-auto relative flex justify-center"
      >
        <div className="flex flex-col gap-4 text-center  w-[50%]">
         <h1 className="text-white text-3xl  font-semibold mb-4">
          Get in <span className="text-purple-500">Touch!</span>
         </h1>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-white outline-none bg-[rgba(11,19,31,0.4)] p-8 rounded-3xl "
          >
            <FieldSet>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                      <Input
                        {...field}
                        id="fullName"
                        type="text"
                        placeholder="Your name"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 !focus:border-purple-500"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        type="text"
                        placeholder="name@example.com"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 !focus:border-purple-500"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        {...field}
                        id="message"
                        placeholder="Your message..."
                        rows={4}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0 !focus:border-purple-500"
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>
            </FieldSet>
            <Button
              type="submit"
              className="bg-purple-500/80 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/50 mt-8"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </ScrollFadeIn>
  );
}
