'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Resources() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/assessment', label: 'Assessment' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ]

  const emotionalResources = [
    {
      icon: '😢',
      title: 'Sadness',
      desc: 'Explore resources and connect with others experiencing sadness.',
      tips: [
        'Allow yourself to feel your emotions',
        'Reach out to trusted friends or family',
        'Practice self-care activities you enjoy',
        'Consider professional counseling support'
      ],
      medical: 'If sadness persists for more than 2 weeks, consult a mental health professional.'
    },
    {
      icon: '😠',
      title: 'Anger',
      desc: 'Learn healthy ways to process and manage anger.',
      tips: [
        'Take deep breaths and pause before reacting',
        'Identify triggers and patterns',
        'Practice physical exercise to release tension',
        'Use journaling to express feelings'
      ],
      medical: 'Persistent anger issues may benefit from cognitive behavioral therapy (CBT).'
    },
    {
      icon: '😰',
      title: 'Anxiety',
      desc: 'Find calm through anxiety management strategies.',
      tips: [
        'Practice grounding techniques (5-4-3-2-1)',
        'Try progressive muscle relaxation',
        'Limit caffeine and maintain regular sleep',
        'Meditate for 10-15 minutes daily'
      ],
      medical: 'Generalized anxiety lasting over 6 months requires professional evaluation.'
    }
  ]

  const medicalResources = [
    {
      title: 'Therapy Options',
      items: [
        'Cognitive Behavioral Therapy (CBT)',
        'Dialectical Behavior Therapy (DBT)',
        'Psychodynamic Therapy',
        'Acceptance and Commitment Therapy (ACT)'
      ]
    },
    {
      title: 'Medication & Support',
      items: [
        'Consult psychiatrist for medication evaluation',
        'SSRIs for anxiety and depression',
        'Support groups for shared experiences',
        'Teletherapy for convenient access'
      ]
    },
    {
      title: 'Lifestyle Changes',
      items: [
        '30 minutes of exercise daily',
        '7-9 hours of quality sleep',
        'Balanced nutrition and hydration',
        'Reduce screen time before bed'
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Zenness
          </Link>
          
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-800 hover:text-lime-400 transition-colors"
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
          Mental Health Resources
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl leading-relaxed">
          Comprehensive resources and medical recommendations to support your mental health journey. Find tools, strategies, and professional guidance tailored to your needs.
        </p>
      </section>

      {/* Emotional Resources */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Support for Different Emotions
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {emotionalResources.map((resource, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <p className="text-5xl mb-4">{resource.icon}</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-800 mb-6">
                {resource.desc}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-blue-700 mb-3">Helpful Tips:</h4>
                <ul className="space-y-2">
                  {resource.tips.map((tip, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-lime-400 font-bold mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-xs text-blue-900">
                  <strong>Medical Note:</strong> {resource.medical}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Recommendations */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-pink-100 to-blue-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Medical Recommendations & Treatment Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {medicalResources.map((section, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-lime-400 text-xl font-bold mt-1">✓</span>
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">When to Seek Professional Help</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Symptoms persist for more than 2 weeks',
              'Difficulty managing daily activities',
              'Suicidal or self-harm thoughts',
              'Substance abuse concerns',
              'Significant sleep or appetite changes',
              'Social withdrawal or isolation'
            ].map((indicator, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800 font-bold text-sm">
                <span className="text-red-500 font-bold">⚠</span>
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
        <div className="from-sky-200 to-indigo-200 rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white mb-8 text-lg">
            Take our mental health assessment to get personalized recommendations.
          </p>
          <Link
            href="/assessment"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Take Assessment Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-6 md:px-12 py-8 text-center text-sm">
        <p>&copy; 2025 Zenness. All rights reserved. Your mental health matters.</p>
      </footer>
    </main>
  )
}
