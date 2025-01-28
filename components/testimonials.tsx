'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "HireHub transformed our hiring process. We found amazing talent in record time!",
    author: "Sarah Johnson",
    position: "HR Director, TechCorp"
  },
  {
    quote: "The quality of candidates HireHub provided was exceptional. They truly understand our needs.",
    author: "Michael Chen",
    position: "CEO, InnovateCo"
  },
  {
    quote: "HireHub's career coaching helped me land my dream job. I'm forever grateful!",
    author: "Emily Rodriguez",
    position: "Software Engineer"
  }
]

const AUTO_PLAY_INTERVAL = 5000 // 5 seconds

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [height, setHeight] = useState("auto")
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [currentIndex])

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextTestimonial()
      }, AUTO_PLAY_INTERVAL)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, nextTestimonial])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoPlaying(true)
    }, AUTO_PLAY_INTERVAL)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div 
            className="bg-white p-8 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -50 }}
                transition={{
                  opacity: { duration: 0.2 },
                  x: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="h-full"
                ref={contentRef}
              >
                <p className="text-xl mb-4 text-gray-700">"{testimonials[currentIndex].quote}"</p>
                <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <button 
            onClick={() => {
              prevTestimonial()
              setIsAutoPlaying(false)
            }} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-teal-600" />
          </button>
          <button 
            onClick={() => {
              nextTestimonial()
              setIsAutoPlaying(false)
            }} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

