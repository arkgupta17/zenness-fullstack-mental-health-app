'use client'
import { useChatbot } from "@/app/chatbot-context";
import { useState } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  
const { isOpen, setIsOpen } = useChatbot();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Zenbot. How can I help you with your mental health journey today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotsResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
    }, 500)
  }

  const getBotsResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('meditation')) {
      return 'Great question! Meditation can help reduce stress and anxiety. Try our guided meditation sessions available in the Resources section. Would you like a recommendation for beginners?'
    }
    if (input.includes('anxiety') || input.includes('stress')) {
      return 'I understand. Anxiety can be challenging. Some helpful techniques include deep breathing exercises, progressive muscle relaxation, and mindfulness. Would you like to take our assessment to get personalized recommendations?'
    }
    if (input.includes('assessment')) {
      return 'Our mental health assessment is a great first step! It takes about 10 minutes and provides personalized insights about your emotional well-being. You can access it from the Assessment page. Ready to get started?'
    }
    if (input.includes('help') || input.includes('support')) {
      return 'I\'m here to help! You can explore our resources, take our assessment, or connect with professional therapists. What area interests you most?'
    }
    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! It\'s great to connect with you. I\'m here to support your mental health journey. How are you feeling today?'
    }
    
    return 'Thank you for your question! For more personalized support, I recommend taking our mental health assessment or exploring our resources section. You can also connect with a professional therapist through our platform. Is there anything specific I can help you with?'
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-6 right-6 z-40 bg-white rounded-full w-15 h-15 shadow-[0_0_30px_rgba(168,85,247,0.45)] hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] transition-all duration-300 flex items-center justify-center hover:scale-110"
  aria-label="Open chatbot"
>
  <img 
    src="/bot.png" 
    alt="Chatbot" 
    className="w-12 h-12"
  />
</button>



      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-40 flex flex-col border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-lime-400 text-white px-6 py-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Zenness AI Assistant</h3>
              <p className="text-xs text-gray-100">Always here to help</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors duration-300"
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg transition-all duration-300 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none hover:shadow-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none hover:shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-4 bg-gray-50 rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                className="bg-lime-400 hover:bg-lime-500 text-gray-800 rounded-lg p-2 transition-all duration-300 hover:scale-110"
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
