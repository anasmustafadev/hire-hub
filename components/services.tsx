'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { UserPlus, Building, Briefcase, TrendingUp, Users, Award } from 'lucide-react'
import { motion } from "framer-motion"

const services = [
  {
    title: "Talent Acquisition",
    description: "Find the perfect candidates for your open positions.",
    icon: UserPlus
  },
  {
    title: "Corporate Partnerships",
    description: "Build long-term relationships with top employers.",
    icon: Building
  },
  {
    title: "Career Coaching",
    description: "Help candidates advance their careers with expert guidance.",
    icon: Briefcase
  },
  {
    title: "Market Analysis",
    description: "Stay ahead with our in-depth industry insights.",
    icon: TrendingUp
  },
  {
    title: "Team Building",
    description: "Enhance your team's cohesion and productivity.",
    icon: Users
  },
  {
    title: "Executive Search",
    description: "Find top-tier leadership for your organization.",
    icon: Award
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

