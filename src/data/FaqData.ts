export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "Yes, in most cases there is a standard call out fee which covers the cost of travel and the initial inspection. The exact amount depends on your location and the time of the call (daytime, evening, or emergency).",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer:
      "We aim to send out an engineer the same day you contact us. For urgent cases such as leaks or heating failures, we prioritize emergency call-outs and can often be at your property within 1–2 hours.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "First, turn off the main water supply immediately to prevent further damage. Then, try to contain the leak with towels or a bucket. Contact us right away, and we’ll dispatch an engineer to fix the issue as quickly as possible.",
  },
];
