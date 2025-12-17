module.exports = [
"[project]/app/assessment/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssessmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AssessmentPage() {
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const questions = [
        {
            key: "anxiety_level",
            question: "How often do you feel anxious?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "self_esteem",
            question: "On most days, how confident do you feel about yourself?",
            options: [
                "Very Low",
                "Low",
                "Moderate",
                "Good",
                "Very Good",
                "Excellent"
            ]
        },
        {
            key: "mental_health_history",
            question: "Have emotional or mental challenges been a part of your past?",
            options: [
                "Not at all",
                "Yes"
            ]
        },
        {
            key: "depression",
            question: "How often do heavy or sad feelings stay with you?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "headache",
            question: "Do headaches show up often in your daily routine?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Severe Daily"
            ]
        },
        {
            key: "blood_pressure",
            question: "How frequently does your body feel stressed physically (like BP changes)?",
            options: [
                "Never",
                "Sometimes",
                "Often"
            ]
        },
        {
            key: "sleep_quality",
            question: "How refreshing does your sleep usually feel?",
            options: [
                "Not at all",
                "Poor",
                "Okay",
                "Good",
                "Very Good",
                "Excellent"
            ]
        },
        {
            key: "breathing_problem",
            question: "Does your breathing ever feel tight or difficult during stress?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Chronic"
            ]
        },
        {
            key: "noise_level",
            question: "How noisy or distracting is the environment around you?",
            options: [
                "Silent",
                "Low Noise",
                "Moderate",
                "Noisy",
                "Very Noisy",
                "Unbearable"
            ]
        },
        {
            key: "living_conditions",
            question: "How comfortable and peaceful do your living conditions feel?",
            options: [
                "Very Poor",
                "Poor",
                "Fair",
                "Good",
                "Very Good",
                "Excellent"
            ]
        },
        {
            key: "safety",
            question: "Do you feel a sense of safety where you spend most of your time?",
            options: [
                "Not Safe",
                "Somewhat Unsafe",
                "Neutral",
                "Safe",
                "Very Safe",
                "Extremely Safe"
            ]
        },
        {
            key: "basic_needs",
            question: "Are your Basic needs (food, rest, comfort) taken care of well?",
            options: [
                "Not at all",
                "Rarely",
                "Sometimes",
                "Mostly",
                "Fully",
                "More than Enough"
            ]
        },
        {
            key: "academic_performance",
            question: "How satisfied are you with your academic progress lately?",
            options: [
                "Very Unsatisfied",
                "Unsatisfied",
                "Neutral",
                "Satisfied",
                "Happy",
                "Very Happy"
            ]
        },
        {
            key: "study_load",
            question: "How heavy does your study workload feel?",
            options: [
                "Very Light",
                "Light",
                "Normal",
                "Heavy",
                "Very Heavy",
                "Overwhelming"
            ]
        },
        {
            key: "teacher_student_relationship",
            question: "How supported or understood do you feel by your teachers?",
            options: [
                "Not at all",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "future_career_concerns",
            question: "When you think about your future career, how stressed do you feel?",
            options: [
                "Not at all",
                "A Little",
                "Somewhat",
                "Quite Stressed",
                "Very Stressed",
                "Overwhelmed"
            ]
        },
        {
            key: "social_support",
            question: "Do you feel emotionally supported socially?",
            options: [
                "Not at all",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "peer_pressure",
            question: "How often do you feel pushed to follow others' expectations?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "extracurricular_activities",
            question: "How involved or active do you feel outside academics?",
            options: [
                "Not Active",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Always"
            ]
        },
        {
            key: "bullying",
            question: "Have you felt targeted, disrespected, or bullied recently?",
            options: [
                "Never",
                "Rarely",
                "Sometimes",
                "Often",
                "Very Often",
                "Constantly"
            ]
        }
    ];
    const handleAnswer = (answer)=>{
        setAnswers({
            ...answers,
            [currentQuestion]: answer
        });
    };
    const handleNext = ()=>{
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };
    const handlePrevious = ()=>{
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const handleSubmit = async ()=>{
        // Convert answers to numeric scale
        const formattedAnswers = {};
        questions.forEach((q, index)=>{
            const selectedOption = answers[index];
            const numericValue = q.options.indexOf(selectedOption);
            formattedAnswers[q.key] = numericValue;
        });
        // Send to backend
        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formattedAnswers)
        });
        const data = await response.json();
        // Redirect to result page
        router.push(`/result?score=${data.stress_level}`);
    };
    const progress = (currentQuestion + 1) / questions.length * 100;
    // if (submitted) {
    //   return (
    //     <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-20">
    //       <div className="max-w-2xl mx-auto px-6">
    //         <div className="text-center">
    //           <div className="w-24 h-24 mx-auto mb-6 bg-lime-400 rounded-full flex items-center justify-center text-5xl">
    //             ✓
    //           </div>
    //           <h1 className="text-4xl font-bold text-gray-800 mb-4">Assessment Complete!</h1>
    //           <p className="text-gray-600 mb-8 leading-relaxed text-lg">
    //             Thank you for completing the mental health assessment.</p>
    //           <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
    //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Next Steps:</h2>
    //             <ul className="text-left space-y-3 text-gray-700">
    //               <li className="flex gap-3">
    //                 <span className="text-lime-400 font-bold">1.</span>
    //                 <span>Check your email for detailed assessment results</span>
    //               </li>
    //               <li className="flex gap-3">
    //                 <span className="text-lime-400 font-bold">2.</span>
    //                 <span>Review personalized mental health recommendations</span>
    //               </li>
    //               <li className="flex gap-3">
    //                 <span className="text-lime-400 font-bold">3.</span>
    //                 <span>Get Connected to a Therapist or Psychiatrist if you feel mentally imbalanced.</span>
    //               </li>
    //             </ul>
    //           </div>
    //           <Link href="/">
    //             <Button className="bg-lime-400 text-gray-800 hover:bg-lime-500 rounded-full px-8 py-6 text-base font-semibold">
    //               Back to Home
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </main>
    //   )
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/assessment/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                "Back to Home"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-gray-800 mb-2",
                            children: "Mental Health Assessment"
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8",
                            children: "Answer these questions to help us understand your mental health better."
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/assessment/page.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: [
                                        "Question ",
                                        currentQuestion + 1,
                                        " of ",
                                        questions.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/assessment/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-600",
                                    children: [
                                        Math.round(progress),
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/assessment/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-gray-200 rounded-full h-2 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-lime-400 h-full transition-all duration-300 ease-out",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/assessment/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/assessment/page.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-gray-800 mb-8",
                            children: questions[currentQuestion].question
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 mb-10",
                            children: questions[currentQuestion].options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleAnswer(option),
                                    className: `w-full p-4 text-left rounded-lg border-2 font-medium transition-all ${answers[currentQuestion] === option ? 'border-lime-400 bg-lime-50 text-gray-800' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`,
                                    children: option
                                }, index, false, {
                                    fileName: "[project]/app/assessment/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/assessment/page.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4 justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePrevious,
                            disabled: currentQuestion === 0,
                            className: "flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        currentQuestion === questions.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: Object.keys(answers).length !== questions.length,
                            className: "flex-1 px-6 py-3 bg-lime-400 text-gray-800 rounded-full font-medium hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: "Submit Assessment"
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 262,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleNext,
                            disabled: !answers[currentQuestion],
                            className: "flex-1 px-6 py-3 bg-lime-400 text-gray-800 rounded-full font-medium hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all",
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/app/assessment/page.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/assessment/page.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/assessment/page.tsx",
            lineNumber: 203,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/assessment/page.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_assessment_page_tsx_63a66ea1._.js.map