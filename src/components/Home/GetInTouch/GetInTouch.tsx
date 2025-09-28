"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-20 py-16">
      <div className="w-full max-w-3xl rounded-2xl bg-[#0066FF] text-white text-center px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>

        <p className="text-sm leading-relaxed mb-6">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support,
          <br className="hidden lg:block" />
          or a domestic plumbing task that needs the attention of a trusted
          professional.
        </p>

        <Button
          variant="secondary"
          className="bg-white text-[#0066FF] hover:bg-gray-100 font-medium px-6 py-2 rounded-md"
        >
          Book a Professional Plumber
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
