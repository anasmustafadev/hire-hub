'use client'

import { motion } from "framer-motion"

const steps = [
  { title: "Initial Consultation", description: "We discuss your hiring needs and goals." },
  { title: "Candidate Search", description: "Our experts find and screen top talent." },
  { title: "Interview Process", description: "We facilitate interviews and provide feedback." },
  { title: "Offer and Onboarding", description: "We help with negotiations and smooth transitions." }
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Process</h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex mb-8 items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

