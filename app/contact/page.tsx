'use client'

import Link from 'next/link'
import { Menu, X, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/assessment', label: 'Assessment' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
  {/* Brain Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="
        M8 8.5C6.5 8.5 5.3 9.7 5.3 11.2C5.3 12.1 5.6 12.9 6.1 13.5
        C5.2 14.1 4.6 15.1 4.6 16.2C4.6 18 6 19.4 7.8 19.4
        C8.4 19.4 8.9 19.2 9.4 18.9M16 8.5C17.5 8.5 18.7 9.7 18.7 11.2
        C18.7 12.1 18.4 12.9 17.9 13.5C18.8 14.1 19.4 15.1 19.4 16.2
        C19.4 18 18 19.4 16.2 19.4C15.6 19.4 15.1 19.2 14.6 18.9
        M12 5.5C12 4.1 10.9 3 9.5 3C8.1 3 7 4.1 7 5.5
        C7 6.5 7.6 7.3 8.4 7.7M12 5.5C12 4.1 13.1 3 14.5 3
        C15.9 3 17 4.1 17 5.5C17 6.5 16.4 7.3 15.6 7.7M12 7V21
      "
    />
  </svg>

  {/* LOGO */}
  <span className="text-[21px] font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition">
    ZEN<span className="font-light">NESS</span>
  </span>
</Link>
          
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-lime-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="flex flex-col gap-4 px-6 py-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-lime-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-6 md:px-12 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          We're here to support your mental health journey. Reach out to us with any questions or concerns.
        </p>
      </section>

      {/* Contact Information */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:support@zenness.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    support@zenness.com
                  </a>
                  <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:+15550000000" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +1 (555) 000-0000
                  </a>
                  <p className="text-sm text-gray-500 mt-2">Monday - Friday, 9AM - 6PM EST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Support Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Weekend: Emergency support available 24/7
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Crisis Support</h3>
                  <p className="text-gray-600">
                    National Suicide Prevention Lifeline:<br />
                    iCall – Tata Institute of Social Sciences (TISS)                             📞 +91 9152987821
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <p className="text-green-800 font-semibold mb-2">Thank you for your message!</p>
                <p className="text-green-700 text-sm">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-pink-100 to-blue-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: 'How quickly will I get a response?',
              a: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our crisis line at 14416.'
            },
            {
              q: 'Is my information kept confidential?',
              a: 'Yes, all personal information is kept strictly confidential and secure in accordance with HIPAA regulations.'
            },
            {
              q: 'Do you offer teletherapy sessions?',
              a: 'Yes, we offer secure teletherapy sessions with certified mental health professionals. Contact us to schedule.'
            },
            {
              q: 'What if I\'m experiencing a crisis?',
              a: 'If you are in immediate danger or having suicidal thoughts, please call 112 or the National Suicide Prevention Lifeline at 14416.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-3">{item.q}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 md:px-12 py-8 text-center text-sm">
        <p>&copy; 2025 Zenness. All rights reserved. Your mental health matters.</p>
      </footer>
    </main>
  )
}
