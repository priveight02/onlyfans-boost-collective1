import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What does your agency offer?",
    answer: "Our agency provides comprehensive services including content creation, brand development, marketing strategy, revenue optimization, and 24/7 support to help content creators maximize their success."
  },
  {
    question: "How do I get started with your agency?",
    answer: "Getting started is easy! Simply fill out our application form on the Join page, and our team will review your submission and contact you within 48 hours to discuss the next steps."
  },
  {
    question: "How much do you charge?",
    answer: "Our pricing is customized based on your specific needs and goals. We'll discuss all details during your initial consultation to ensure we create a package that works for you."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 support to our models, including content strategy, technical assistance, marketing support, and personal guidance to help you achieve your goals."
  },
  {
    question: "How long does it take to see results?",
    answer: "While results vary, most of our models see significant growth within the first 3 months of working with us. We focus on sustainable, long-term growth strategies."
  },
  {
    question: "Do you help with content creation?",
    answer: "Yes! We offer professional content creation services, including photography, videography, and strategic content planning to help you maintain a consistent, high-quality presence."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-primary to-primary-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-white animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Find answers to common questions about our services and how we can help you succeed.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-primary hover:text-primary-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-heading animate-fade-in">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Contact us anytime. Our team is here to help you succeed.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-accent transition-colors duration-200 animate-fade-in"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQ;