import React from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I book a flight through Aerofly Travels?',
      answer: 'You can book a flight through our website by using our flight search engine. Simply enter your departure and arrival cities, dates, and number of passengers. You can also contact our travel consultants directly for assistance with your booking.'
    },
    {
      question: 'What documents do I need for visa application?',
      answer: 'Required documents typically include a valid passport, photographs, completed application form, bank statements, and travel itinerary. Specific requirements vary by country. Our visa specialists will provide you with a detailed checklist based on your destination.'
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: "Yes, you can modify or cancel your booking subject to the airline's policies and fare rules. Please contact our customer service team as soon as possible if you need to make changes to your reservation."
    },
    {
      question: 'How do I get the best deals on flights and packages?',
      answer: 'Subscribe to our newsletter to receive updates on special offers and promotions. We also recommend booking in advance and being flexible with your travel dates to secure the best rates.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and bank transfers. All payments are processed through secure payment gateways to ensure your financial information is protected.'
    },
    {
      question: 'Do you offer travel insurance?',
      answer: 'Yes, we offer comprehensive travel insurance packages that cover medical emergencies, trip cancellations, lost baggage, and other travel-related incidents. We recommend always traveling with insurance for peace of mind.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Our customer support team is available 24/7. You can reach us through phone, email, or the contact form on our website. For urgent matters, we recommend calling our emergency support line.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'Refund policies vary depending on the type of service and the terms and conditions of our partners. We always strive to process refunds as quickly as possible and will assist you throughout the refund process.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#2a9df4] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            Our friendly team is here to help you with any other questions
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}