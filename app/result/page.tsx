'use client'
import type { ComponentType } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle2, AlertTriangle, Activity, Heart, Brain, Home, ArrowRight, Zap, Shield, Phone } from 'lucide-react'
import Link from 'next/link'

type Rec = {
  icon: ComponentType<any>
  title: string
  desc: string
  number?: string
}

export default function ResultPage() {
  const searchParams = useSearchParams()
  const score = parseInt(searchParams.get('score') || '2')

  const getStressLevel = (score: number) => {
    if (score === 0) return { 
      label: 'Low Stress', 
      color: 'from-green-400 to-emerald-400', 
      bgColor: 'bg-green-50', 
      accentColor: 'text-green-700', 
      borderColor: 'border-green-200',
      description: 'Your stress levels are healthy and well-managed. Keep up your excellent wellness habits!', 
      icon: CheckCircle2,
      badgeEmoji: '✓ Thriving'
    }
    if (score === 1) return { 
      label: 'Moderate Risk!', 
      color: 'from-amber-400 to-orange-400', 
      bgColor: 'bg-amber-50', 
      accentColor: 'text-amber-700', 
      borderColor: 'border-amber-200',
      description: 'Your stress levels are manageable but rising. Now is the time to implement calming strategies.', 
      icon: Zap,
      badgeEmoji: '⚡ Building Up'
    }
    return { 
      label: 'High Stress', 
      color: 'from-red-400 to-rose-400', 
      bgColor: 'bg-red-50', 
      accentColor: 'text-red-700', 
      borderColor: 'border-red-200',
      description: 'Your stress levels are significantly elevated. Professional support and immediate action are strongly recommended.', 
      icon: AlertTriangle,
      badgeEmoji: '⚠ Urgent'
    }
  }

  const stressInfo = getStressLevel(score)
  const StressIcon = stressInfo.icon

  /* MAIN RECOMMENDATIONS (typed) */
  const baseRecs: Rec[] =
    score === 0
      ? [
          { icon: Shield, title: 'Maintain Balance', desc: 'Continue with healthy routines and self-care practices that support your wellbeing.' },
          { icon: Activity, title: 'Stay Consistent', desc: 'Keep regular exercise and outdoor activities that maintain mental clarity.' },
          { icon: Brain, title: 'Daily Gratitude', desc: 'Try 5-minute gratitude journaling to build positivity and resilience.' }
        ]
      : score === 1
      ? [
          { icon: Brain, title: 'Start Meditation', desc: 'Practice 10–15 minutes of mindfulness daily to reduce stress buildup.' },
          { icon: Activity, title: 'Increase Movement', desc: 'Add walking, yoga, or stretching to your routine to stay balanced.' },
          { icon: Heart, title: 'Prioritize Sleep', desc: 'Aim for 7–8 hours of restful sleep with a calm nightly routine.' }
        ]
      : [
          { icon: AlertTriangle, title: 'Seek Professional Help', desc: 'Connect with a therapist or counselor for immediate guidance and support.' },
          { icon: Zap, title: 'Emergency Resources', desc: 'Use crisis hotlines or mental health helplines for urgent support (24/7).' },
          { icon: Heart, title: 'Take Time Off & Reset', desc: 'Step away from work and focus on calm, grounding exercises for recovery.' }
        ]

  /* HELPLINE CARD */
  const helplineCard: Rec = {
    icon: Phone,
    title: "24/7 Mental Health Helpline",
    desc: "Call for immediate emotional support or crisis assistance.",
    number: "1800-891-4416"
  }

  const recommendations: Rec[] = [...baseRecs, helplineCard]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-white">
      {/* Top navigation bar */}
      <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
          <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Stress Assessment Result
          </h1>

          <div className="ml-auto">
            <Link href="/">
              <Button 
                variant="outline" 
                className="gap-2 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-white hover:border-slate-300 transition-all duration-200"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        
        {/* RESULT CARD */}
        <div className={`${stressInfo.bgColor} rounded-2xl p-10 mb-14 border-2 ${stressInfo.borderColor} shadow-sm hover:shadow-md transition-shadow duration-300`}>
          <div className="flex flex-col items-center text-center space-y-6">

            <div className={`p-4 ${stressInfo.bgColor} rounded-full border-2 ${stressInfo.borderColor}`}>
              <StressIcon className={`w-12 h-12 ${stressInfo.accentColor}`} />
            </div>

            <div className="space-y-4 max-w-[60ch]">
              <h2 className={`text-4xl font-display font-bold ${stressInfo.accentColor} leading-tight`}>
                {stressInfo.label}
              </h2>
              <p className={`text-lg ${stressInfo.accentColor} font-semibold leading-relaxed`}>
                {stressInfo.description}
              </p>
            </div>

            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 ${stressInfo.borderColor} bg-white shadow-sm`}>
              <div className={`flex items-center justify-center w-9 h-9 rounded-full ${stressInfo.bgColor} border-2 ${stressInfo.borderColor}`}>
                <span className={`text-base font-bold ${stressInfo.accentColor}`}>{score}</span>
              </div>
              <span className={`text-base font-bold ${stressInfo.accentColor}`}>
                {stressInfo.badgeEmoji}
              </span>
            </div>
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
          Recommended Next Steps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {recommendations.map((rec, idx) => {
            const RecIcon = rec.icon
            const isHelpline = typeof rec.number === 'string' && rec.number.length > 0

            return (
              <Card
                key={idx}
                className={`p-7 border-2 ${stressInfo.borderColor} ${stressInfo.bgColor} hover:shadow-xl hover:border-current transition-all duration-300 group min-h-[240px] flex flex-col rounded-xl`}
              >
                <div className="inline-flex p-3 rounded-lg bg-white border-2 border-slate-200 group-hover:shadow-md transition-shadow mb-4">
                  <RecIcon className={`w-6 h-6 ${stressInfo.accentColor}`} />
                </div>

                <h4 className={`text-xl font-bold ${stressInfo.accentColor} mb-2`}>
                  {rec.title}
                </h4>

                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  {rec.desc}
                </p>

                {isHelpline && (
                  <p className="mt-4 text-lg font-bold text-slate-900">
                    📞 {rec.number}
                  </p>
                )}

                <div className="mt-auto" />
              </Card>
            )
          })}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
           <Link href='/resources'className="flex-1"><button className={`flex-1 h-12 font-semibold rounded-lg bg-gradient-to-r from-sky-400 to-indigo-400
            text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2`}>
           <span>View Helpful Resources</span>
            <ArrowRight className="w-5 h-5" />
          </button></Link>

          <Link href="/" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full h-12 font-semibold rounded-lg border-2 border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              <span>Retry Assessment</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}
