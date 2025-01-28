'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hire<span className="text-teal-600">Hub</span>
          </motion.h1>
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find the Right Talent. Land the Perfect Job.
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering Businesses, Elevating Careers
          </motion.p>
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              Hire Talent
            </Button>
            <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-800">
              Find Jobs
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Trusted by industry leaders and job seekers nationwide.
          </motion.div>
        </div>
      </div>
    </section>
  )
}

