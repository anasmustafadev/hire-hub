'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How long does the hiring process typically take?",
    answer: "The hiring process duration can vary depending on the position and specific requirements. On average, it takes 2-4 weeks from initial consultation to offer acceptance."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in a wide range of industries including technology, finance, healthcare, education and manufacturing. Our team has expertise in recruiting for various roles within these sectors."
  },
  {
    question: "Do you offer remote hiring services?",
    answer: "Yes, we provide remote hiring services. We have experience in sourcing and placing candidates for remote positions across different time zones and countries."
  },
  {
    question: "What sets HireHub apart from other recruitment agencies?",
    answer: "HireHub stands out due to our personalized approach, extensive network of top talent, and our commitment to long-term partnerships with both clients and candidates. We also utilize cutting-edge AI technology to enhance our recruitment process."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-teal-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden shadow-lg"
                  >
                    <div className="bg-white px-4 py-2 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

