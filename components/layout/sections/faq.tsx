import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What web development services do you offer?",
    answer: "We offer full-stack web development services including frontend, backend, and database management.",
    value: "item-1",
  },
  {
    question: "Can you help with website design?",
    answer:
      "Yes, our team specializes in creating responsive and user-friendly website designs tailored to your needs.",
    value: "item-2",
  },
  {
    question: "Do you provide DevOps services?",
    answer:
      "Absolutely. We offer comprehensive DevOps services including CI/CD pipeline setup, cloud infrastructure management, and automated deployments.",
    value: "item-3",
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use a variety of technologies including React, Next.js, Node.js, and various cloud services like AWS and Azure.",
    value: "item-4",
  },
  {
    question: "Can you assist with SEO optimization?",
    answer: "Yes, we provide SEO optimization services to help improve your website's visibility and ranking on search engines.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32 scroll-mt-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
