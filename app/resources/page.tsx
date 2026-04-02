'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Heart } from 'lucide-react'
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
      title: 'Sadness',
      desc: 'Explore resources and connect with others experiencing sadness.',
      image: 'sadness-calm.jpg',
      gradient: 'from-sky-300/60 to-blue-500/60',
      tips: [
        'Allow yourself to feel your emotions',
        'Reach out to trusted friends or family',
        'Practice self-care activities you enjoy',
        'Consider professional counseling support'
      ],
      medical: 'If sadness persists for more than 2 weeks, consult a mental health professional.'
    },
    {
      title: 'Anger',
      desc: 'Learn healthy ways to process and manage anger.',
      image: 'anger-calm.jpg',
      gradient: 'from-amber-300/60 to-orange-500/60',
      tips: [
        'Take deep breaths and pause before reacting',
        'Identify triggers and patterns',
        'Practice physical exercise to release tension',
        'Use journaling to express feelings'
      ],
      medical: 'Persistent anger issues may benefit from cognitive behavioral therapy (CBT).'
    },
    {
      title: 'Anxiety',
      desc: 'Find calm through anxiety management strategies.',
      image: 'anxiety-calm.jpg',
      gradient: 'from-violet-300/60 to-purple-500/60',
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
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<Link href="/" className="flex items-center gap-2 group">
  <div className="flex items-center gap-2">
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
        d="M8 8.5C6.5 8.5 5.3 9.7 5.3 11.2C5.3 12.1 5.6 12.9 6.1 13.5
        C5.2 14.1 4.6 15.1 4.6 16.2C4.6 18 6 19.4 7.8 19.4
        C8.4 19.4 8.9 19.2 9.4 18.9M16 8.5C17.5 8.5 18.7 9.7 18.7 11.2
        C18.7 12.1 18.4 12.9 17.9 13.5C18.8 14.1 19.4 15.1 19.4 16.2
        C19.4 18 18 19.4 16.2 19.4C15.6 19.4 15.1 19.2 14.6 18.9
        M12 5.5C12 4.1 10.9 3 9.5 3C8.1 3 7 4.1 7 5.5
        C7 6.5 7.6 7.3 8.4 7.7M12 5.5C12 4.1 13.1 3 14.5 3
        C15.9 3 17 4.1 17 5.5C17 6.5 16.4 7.3 15.6 7.7M12 7V21"
      />
    </svg>

    <span className="text-[21px] font-semibold tracking-tight text-gray-900 group-hover:text-blue-600 transition">
      ZEN<span className="font-light">NESS</span>
    </span>
  </div>
</Link>
          
          <div className="hidden md:flex gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-800 hover:text-sky-600 transition-colors"
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
                  className="text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors"
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
      <section className="pt-24 pb-12 px-6 md:px-12 bg-gradient-to-b from-sky-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Mental Health Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
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
            <div key={i} className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image Header */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${resource.gradient}`} />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {resource.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {resource.desc}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-sky-600 mb-3">Helpful Tips:</h4>
                  <ul className="space-y-2">
                    {resource.tips.map((tip, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-sky-500 font-bold mt-0.5">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-sky-50 rounded-lg border border-sky-100">
                  <p className="text-xs text-sky-900">
                    <strong>Medical Note:</strong> {resource.medical}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Recommendations */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-sky-50 via-violet-50 to-sky-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Medical Recommendations & Treatment Options
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {medicalResources.map((section, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-sky-700 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-emerald-500 text-lg font-bold">&#10003;</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-400 mt-8">
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
              <li key={i} className="flex items-start gap-3 text-gray-800 font-medium text-sm">
                <span className="text-amber-500 font-bold">&#9888;</span>
                {indicator}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-white">
      <div className="relative bg-gradient-to-br from-teal-50 via-sky-50 to-indigo-50 rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-teal-100/50 shadow-xl shadow-teal-100/20">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-sky-200/20 to-transparent rounded-full blur-3xl" />
        
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-teal-700 via-sky-700 to-indigo-700 bg-clip-text text-transparent mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-600 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Take our mental health assessment to get personalized recommendations.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold px-10 py-4 rounded-full hover:from-teal-600 hover:to-sky-700 transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:scale-105"
          >
            Take Assessment Now
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-6 md:px-12 py-8 text-center text-sm">
        <p>&copy; 2025 Zenness. All rights reserved. Your mental health matters.</p>
      </footer>
    </main>
  )
}
