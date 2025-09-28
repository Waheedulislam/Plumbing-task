"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { FaqItem, faqs } from "@/data/FaqData";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-16 flex justify-center text-[#1B1743]">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <h2 className="text-center lg:text-4xl md:text-3xl text-2xl sm:mt-5 font-bold text-[#1B1743] mb-10">
          Frequently asked questions
        </h2>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((item: FaqItem, index: number) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <p
                  className={cn(
                    "text-base sm:text-lg font-medium text-[#0D0C3B]",
                    openIndex === index && "font-semibold"
                  )}
                >
                  {item.question}
                </p>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </div>

              {openIndex === index && item.answer && (
                <p className="mt-2 text-sm sm:text-base text-[#2A2F32] leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
