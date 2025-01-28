import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-teal-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Hiring Process?</h2>
        <p className="text-xl mb-8">Let's work together to find the perfect talent for your team.</p>
        <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

