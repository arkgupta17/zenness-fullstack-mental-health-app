"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, Calendar, Heart } from "lucide-react";
import Link from 'next/link'



type Assessment = {
  stress_level: number;
};


function getStressColor(level: number) {
  if (level === 0) return "text-green-600";
  if (level === 1) return "text-amber-600";
  return "text-red-600";
}

function getStressLabel(level: number) {
  if (level === 0) return "Low Stress";
  if (level === 1) return "Moderate Risk";
  return "High Stress";
}

function getStressBgGradient(level: number) {
  if (level === 0) return "from-green-50 to-emerald-50";
  if (level === 1) return "from-amber-50 to-orange-50";
  return "from-red-50 to-rose-50";
}

function getStressBorderColor(level: number) {
  if (level === 0) return "border-green-200";
  if (level === 1) return "border-amber-200";
  return "border-red-200";
}

function getStressBadge(level: number) {
  if (level === 0) return "Thriving";
  if (level === 1) return "Building Up";
  return "Urgent";
}

export default function Dashboard() {
  const [history, setHistory] = useState<Assessment[]>([]);

  const [username, setUsername] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  setUsername(storedUsername);
}, []);

useEffect(() => {
  const token = localStorage.getItem("token");

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("API DATA:", data);

      if (Array.isArray(data)) {
        setHistory(data);
      } else if (data.history) {
        setHistory(data.history);
      } else {
        setHistory(Object.values(data || {}));
      }
    })
    .finally(() => setLoading(false));
}, []);

  const total = history.length;

const avg =
  history.length > 0
    ? history.reduce((sum, h) => sum + h.stress_level, 0) / history.length
    : 0;

let insight = "You're doing great!";

if (avg > 4) insight = "High stress detected. Try relaxation techniques.";
else if (avg > 2) insight = "Moderate stress. Maintain balance.";

  const averageStress =
  history.length > 0
    ? Math.round(
        history.reduce((acc, item) => acc + (item.stress_level ?? 0), 0) /
          history.length
      )
    : 0;

  const latestStress =
  history.length > 0
    ? history[history.length - 1]?.stress_level
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50/30">
      {/* Header */}
      <header className="border-b border-sky-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
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
          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="text-base font-semibold text-sky-600 hover:text-sky-700 transition-colors"
            >
              Home
            </a>
            <a
              href="/assessment"
              className="text-base font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Assessment
            </a>
            <a
              href="/resources"
              className="text-base font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Resources
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          {username && (
  <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
    Welcome back {username}
  </h1>
)}
          <p className="text-lg font-medium text-slate-500">
            Track your mental wellness journey and view your progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border border-sky-100 shadow-xl shadow-sky-100/40 bg-white/90 backdrop-blur-md overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-3 pt-6 px-6">
              <CardTitle className="text-base font-bold text-slate-600">
                Total Assessments
              </CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                <Activity className="w-6 h-6 text-sky-600" />
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className="text-5xl font-extrabold text-slate-900">
                {history.length}
              </div>
              <p className="text-sm font-semibold text-slate-400 mt-2">Completed sessions</p>
            </CardContent>
          </Card>

          <Card className="border border-sky-100 shadow-xl shadow-sky-100/40 bg-white/90 backdrop-blur-md overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-3 pt-6 px-6">
              <CardTitle className="text-base font-bold text-slate-600">
                Average Stress
              </CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-sky-600" />
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className={`text-3xl font-extrabold ${getStressColor(averageStress)}`}>
                {getStressLabel(averageStress)}
              </div>
              <p className="text-sm font-semibold text-slate-400 mt-2">
                Score: {averageStress}/2
              </p>
            </CardContent>
          </Card>

          <Card className="border border-sky-100 shadow-xl shadow-sky-100/40 bg-white/90 backdrop-blur-md overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-3 pt-6 px-6">
              <CardTitle className="text-base font-bold text-slate-600">
                Latest Score
              </CardTitle>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-sky-600" />
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <div className={`text-3xl font-extrabold ${getStressColor(latestStress)}`}>
                {getStressLabel(latestStress)}
              </div>
              <p className="text-sm font-semibold text-slate-400 mt-2">Score: {latestStress}/2</p>
            </CardContent>
          </Card>
        </div>

         <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl mb-8">
          <h3 className="font-semibold text-blue-700 mb-2">
             Insight
          </h3>
          <p className="text-gray-700">{insight}</p>
        </div>

        {/* History Section */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Your History
            </h2>
            <p className="text-base font-medium text-slate-500 mt-1">
              View all your past assessments
            </p>
          </div>
          <Link href="/assessment" className="inline-flex items-center justify-center gap-2 px-7 py-3 text-base font-bold text-white bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 rounded-full transition-all duration-300 shadow-lg shadow-sky-200/60 hover:shadow-xl hover:shadow-sky-300/50 active:scale-[0.98]">
            New Assessment
          </Link>
        </div>

        {/* History Cards */}
        <div className="space-y-5">
          {loading ? (
  <p className="text-center text-gray-500">Loading...</p>
) : history.length === 0 ? (
            <Card className="border border-sky-100 shadow-xl shadow-sky-100/40 bg-white/90 backdrop-blur-md rounded-2xl">
              <CardContent className="flex flex-col items-center justify-center py-20">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center mb-5">
                  <Activity className="w-10 h-10 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  No assessments yet
                </h3>
                <p className="text-base font-medium text-slate-500 text-center max-w-sm">
                  Start your first assessment to track your mental wellness
                  journey.
                </p>
              </CardContent>
            </Card>
          ) : (
            history.map((item, i) => (
              <Card
                key={i}
                className={`border-2 ${getStressBorderColor(item.stress_level)} shadow-lg bg-gradient-to-r ${getStressBgGradient(item.stress_level)} backdrop-blur-md overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              >
                <CardContent className="flex items-center justify-between py-7 px-8">
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center border-2 ${getStressBorderColor(item.stress_level)}`}
                    >
                      <span
                        className={`text-3xl font-extrabold ${getStressColor(item.stress_level)}`}
                      >
                        {item.stress_level}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xl">
                        Assessment #{history.length - i}
                      </p>
                      <p className={`text-base font-semibold ${getStressColor(item.stress_level)} mt-1`}>
                        {getStressLabel(item.stress_level)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-base font-bold ${getStressColor(item.stress_level)} bg-white px-5 py-2.5 rounded-full border-2 ${getStressBorderColor(item.stress_level)} shadow-sm`}>
                      {getStressBadge(item.stress_level)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
