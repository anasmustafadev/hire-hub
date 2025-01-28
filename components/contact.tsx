'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent Successfully! 🎉',
          description:
            "Thank you for reaching out. We'll get back to you soon!",
          variant: 'default',
          className: 'bg-teal-600 text-white border-none',
          duration: 3000,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-12 text-gray-900'>
          Contact Us
        </h2>
        <div className='max-w-md mx-auto'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <Input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name='message'
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button
              type='submit'
              className='w-full bg-teal-600 hover:bg-teal-700 text-white'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
}
