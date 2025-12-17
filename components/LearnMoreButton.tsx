"use client";

import { useChatbot } from "@/app/chatbot-context";
import { ArrowRight } from "lucide-react";

export default function LearnMoreButton({ feature }:any) {
  const { setIsOpen } = useChatbot();

  return (
    <button
      onClick={() =>
        feature.title === "AI Chatbot Support"
          ? setIsOpen(true)
          : (window.location.href = "/resources")
      }
      className="text-blue-600 text-sm font-semibold hover:text-lime-400 flex items-center gap-2 transition-colors duration-300"
    >
      Learn more <ArrowRight size={16} />
    </button>
  );
}
