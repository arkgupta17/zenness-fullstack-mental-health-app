'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useChatbot } from "@/app/chatbot-context";
import { ChevronRight, Menu, X, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import LearnMoreButton from "@/components/LearnMoreButton";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { setIsOpen } = useChatbot();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const token = localStorage.getItem("token");
  setIsLoggedIn(!!token);
 }, []);
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/assessment', label: 'Assessment' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50 border-b border-gray-200/50">
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

          
  {/* Desktop Menu */}
  <div className="hidden md:flex items-center gap-3">
  {/* Nav links */}
  {navItems.map(item => (
    <Link
      key={item.href}
      href={item.href}
      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
    >
      {item.label}
    </Link>
  ))}

  {/* Auth Buttons */}
  {!isLoggedIn ? (
    <>
      <Link href="/login">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
          Login
        </button>
      </Link>

      <Link href="/signup">
        <button className="px-4 py-2 text-sm font-medium bg-lime-400 text-black rounded-lg hover:bg-lime-500 transition">
          Sign Up
        </button>
      </Link>
    </>
  ) : (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        window.location.href = "/";
      }}
      className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  )}
</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 bg-white/90 backdrop-blur-sm animate-slide-in-right">
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h1 className="font-clash tracking-tight leading-tight text-6xl">
  PREDICT YOUR <br /> MENTAL HEALTH?
</h1>
            <p className="text-base text-gray-800 mb-8 leading-relaxed">
              Your mental health matters. Taking care of it is one of the best investments you can make. Start a quick assessment to understand your well-being.
            </p>
            <Button 
             onClick={() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      window.location.href = "/assessment";
    }
  }}
              className="bg-gradient-to-r from-lime-300 to-blue-300 text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-108"
            >
              Take Assessment
            </Button>
          </div>
          <div className="flex justify-center">
  <div
    className="
      relative 
      w-[430px] 
      h-[430px] 
      rounded-[20px]
      overflow-hidden 
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      border border-white/40
      bg-gradient-to-br from-white/40 to-white/10
      backdrop-blur-xl
      transform 
      hover:scale-[1.02] 
      transition-all 
      duration-500
    "
  >
    <img
      src="/image.jpg"
      alt="hero mental health visual"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        </div>

        {/* Zenness Description */}
        <div className="px-6 md:px-12 py-16 bg-blue-50">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Zenness is here to help
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed text-base">
            Zenness helps you understand your stress better using AI. It analyses your responses through a science-based assessment, checks your mental health patterns, and gives personalized suggestions. Get clear insights into your emotional state and daily support that truly helps.
          </p>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="px-6 md:px-12 py-20 bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Mental Health Assessment
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Take our comprehensive assessment to better understand your mental health and receive personalized recommendations.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
  {[
    {
      img: "/meditation.jpg",
      title: "Guided Meditation",
      desc: "Learn guided meditation techniques to calm your mind and reduce stress.",
      gradient: "from-rose-100 via-pink-50 to-white"
    },
    {
      img: "/mindfullness.jpg",
      title: "Mindfulness Resources",
      desc: "Explore mindfulness practices that help you stay present and aware.",
      gradient: "from-yellow-100 via-green-50 to-white"
    },
    {
      img: "/help.jpg",
      title: "Professional Help",
      desc: "Get access to certified mental health professionals when you need support.",
      gradient: "from-orange-100 via-amber-50 to-white"
    }
  ].map((feature, i) => (
    <div
      key={i}
      className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
    >
      
      {/* IMAGE BOX */}
      <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-gray-100">
  <img
    src={feature.img}
    alt={feature.title}
    className="w-full h-full object-cover"
  />
</div>


      {/* TITLE */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        {feature.desc}
      </p>

      {/* BUTTON */}
      <a
        href="/resources"
        className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-2"
      >
        Learn more →
      </a>
    </div>
  ))}
</div>


        <section className="px-6 md:px-12 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Comprehensive Features for Your Wellbeing
            </h2>
            <p className="text-gray-800 mb-16 max-w-2xl leading-relaxed text-lg">
              Zenness provides a complete mental health toolkit designed to support your journey to better emotional wellbeing.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: '🧘‍♀️', 
                  title: 'Guided Meditation', 
                  desc: 'Explore daily meditation sessions to calm your mind, reduce stress, and build inner peace.' 
                },
                { 
                  icon: '📚', 
                  title: 'Mindfulness Resources', 
                  desc: 'Structured courses designed to help you develop mindfulness and stay present.' 
                },
                { 
                  icon: '👨‍⚕️', 
                  title: 'Professional Support', 
                  desc: 'Connect with certified therapists and mental health professionals for personalized guidance.' 
                },
                { 
                  icon: '🤖', 
                  title: 'AI Chatbot Support', 
                  desc: 'Chat with our intelligent AI assistant anytime for immediate support and guidance on mental health topics.' 
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-lime-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  <LearnMoreButton feature={feature} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-blue-50 via-green-50 to-lime-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Success Stories from Our Community
            </h2>
            <p className="text-gray-700 mb-12 max-w-2xl leading-relaxed">
              Hear from real people who have transformed their mental health journey with Zenness.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  name: 'David Park', 
                  role: 'Student',
                  image: '👨‍🎓',
                  text: 'As a student dealing with academic stress, Zenness provides the support I need. The mindfulness predictions have improved my focus and anxiety levels.' ,
                  rating: 5
                },
                { 
                  name: 'Michael Chen', 
                  role: 'Software Engineer',
                  image: '👨‍💻',
                  text: 'I\'ve tried many wellness apps, but Zenness stands out. The professional resources and personalized recommendations have been life-changing.' ,
                  rating: 5
                },
                { 
                  name: 'Emma Rodriguez', 
                  role: 'Student',
                  image: '👩‍🎨',
                  text: 'The prediction is so accurate and the support is awesome. I feel more mindful and present in every aspect of my life. Highly recommended!' ,
                  rating: 5
                },
                { 
                  name: 'James Wilson', 
                  role: 'student',
                  image: '👨‍💼',
                  text: 'The combination of guided meditation, accurate stress level, and professional support is perfect. Zenness has become an essential part of my wellness routine.' ,
                  rating: 5
                },
                { 
                  name: 'Lisa Anderson', 
                  role: 'Healthcare Worker',
                  image: '👩‍⚕️',
                  text: 'Working in healthcare is stressful, but Zenness helps me find balance. The AI chatbot support is incredibly helpful for quick guidance.' ,
                  rating: 5
                },
                { 
                  name: 'Sarah Mitchell', 
                  role: 'Teacher',
                  image: '👩‍🏫',
                  text: 'Zenness has completely transformed my daily routine. The meditation guides are incredibly calming and the community support gives me confidence.' ,
                  rating: 5
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j} className="text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-900 mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="text-sm font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Resources Section */}
        <section id="resources" className="px-6 md:px-12 py-20 bg-gradient-to-r from-pink-100 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              You're not alone
            </h2>
            <p className="text-gray-800 mb-12 max-w-2xl leading-relaxed">
              If you're experiencing challenging emotions, remember that support is available. Explore our resources for different emotional states.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '😢', title: 'Sadness', desc: 'Explore resources and connect with others experiencing sadness. Professional guidance and community support available.' },
                { icon: '😠', title: 'Anger', desc: 'Learn healthy ways to process anger. Access anger management techniques and supportive conversations.' },
                { icon: '😰', title: 'Anxiety', desc: 'Find calm through our anxiety resources. Access breathing exercises and anxiety management strategies.' }
              ].map((resource, i) => (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                  <p className="text-5xl mb-4">{resource.icon}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {resource.desc}
                  </p>
                  <button className="text-blue-500 text-xs font-medium transition-colors duration-300 hover:text-blue-700">
                    Explore resources →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 md:px-12 py-20 bg-white">
          <div className="grid md:grid-cols-2 gap-0 items-stretch rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-lime-400 px-8 md:px-12 py-12 md:py-20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Get in touch!
              </h2>
              <p className="text-gray-800 mb-8 text-base leading-relaxed">
                Ready to take the first step in your mental health journey? Contact us today and let's embark on this transformative experience together.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-700 font-semibold mb-2">Email</p>
                  <a href="mailto:contact@zenness.com" className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300">
                    contact@zenness.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-semibold mb-2">Phone</p>
                  <a href="tel:+15550000000" className="text-gray-600 hover:text-gray-800 text-sm transition-colors duration-300">
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-300 to-blue-300 h-96 md:h-auto flex items-center justify-center overflow-hidden">
              <span className="text-8xl">👨‍👩‍👧‍👦</span>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Mental Health Insights & Articles
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl leading-relaxed">
              Stay informed with expert-curated articles and resources about mental health, wellness, and mindfulness.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: '📖',
                  category: 'Wellness',
                  title: 'The Science Behind Meditation',
                  excerpt: 'Discover how regular meditation can rewire your brain and improve emotional resilience.',
                  date: 'Nov 10, 2025',
                  readTime: '5 min read'
                },
                {
                  image: '🧠',
                  category: 'Mental Health',
                  title: 'Understanding Anxiety Disorders',
                  excerpt: 'Learn about different types of anxiety and practical strategies to manage symptoms effectively.',
                  date: 'Nov 8, 2025',
                  readTime: '7 min read'
                },
                {
                  image: '💤',
                  category: 'Sleep & Rest',
                  title: 'Better Sleep for Better Mental Health',
                  excerpt: 'Explore the crucial connection between sleep quality and mental wellbeing with expert tips.',
                  date: 'Nov 5, 2025',
                  readTime: '6 min read'
                },
                {
                  image: '🏃‍♀️',
                  category: 'Lifestyle',
                  title: 'Exercise as Medicine for Depression',
                  excerpt: 'How physical activity can be a powerful tool in managing depression and boosting mood.',
                  date: 'Nov 1, 2025',
                  readTime: '8 min read'
                },
                {
                  image: '🧘‍♂️',
                  category: 'Mindfulness',
                  title: 'Mindfulness in Daily Life',
                  excerpt: 'Simple techniques to incorporate mindfulness into your everyday activities for greater awareness.',
                  date: 'Oct 28, 2025',
                  readTime: '5 min read'
                },
                {
                  image: '👥',
                  category: 'Relationships',
                  title: 'Building Healthy Communication Skills',
                  excerpt: 'Master the art of communication to strengthen relationships and reduce conflict.',
                  date: 'Oct 25, 2025',
                  readTime: '7 min read'
                }
              ].map((article, i) => (
                <article key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-blue-200 to-lime-200 flex items-center justify-center text-6xl">
                    {article.image}
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-4">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-4">Zenness</h3>
                <p className="text-sm leading-relaxed mb-6">
                  Supporting your mental health journey with innovative tools and compassionate guidance.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20v-7.21H5.5V9.25h2.79V7.44c0-2.77 1.69-4.28 4.16-4.28 1.18 0 2.2.09 2.49.13v2.89h-1.71c-1.34 0-1.6.64-1.6 1.57v2.05h3.2l-.41 3.54h-2.79V20" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" /></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors duration-300 hover:scale-110 transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16.5 7.5h-2.5V6h2.5v1.5zm-3.5 2v6c0 .55-.45 1-1 1s-1-.45-1-1v-6c0-.55.45-1 1-1s1 .45 1 1z" fill="white"/></svg>
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Features</a></li>
                  <li><a href="/assessment" className="text-sm hover:text-lime-400 transition-colors duration-300">Assessment</a></li>
                  <li><a href="/resources" className="text-sm hover:text-lime-400 transition-colors duration-300">Resources</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Pricing</a></li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">About Us</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Blog</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Careers</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Press</a></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Help Center</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Community</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">API Docs</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Support</a></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Terms of Service</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Cookie Policy</a></li>
                  <li><a href="#" className="text-sm hover:text-lime-400 transition-colors duration-300">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                  &copy; 2025 Zenness. All rights reserved. Prioritizing your mental health.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-sm text-gray-400 hover:text-lime-400 transition-colors duration-300">Privacy</a>
                  <a href="#" className="text-sm text-gray-400 hover:text-lime-400 transition-colors duration-300">Terms</a>
                  <a href="#" className="text-sm text-gray-400 hover:text-lime-400 transition-colors duration-300">Cookies</a>
                </div>
              </div>
            </div>

            {/* Crisis Support Banner */}
            <div className="mt-8 p-4 bg-blue-900 rounded-lg border border-blue-700 hover:shadow-lg transition-shadow duration-300">
              <p className="text-sm text-center text-gray-300">
                <span className="font-semibold text-lime-400">Need immediate help?</span> Contact a crisis helpline: Tele‑MANAS (24/7, Govt of India) — 14416 or 1800‑891‑4416 |                                                                KIRAN (National 24×7 mental health & suicide helpline) — 1800‑599‑0019
              </p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  )
}
