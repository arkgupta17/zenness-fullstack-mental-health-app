"use client";
import { createContext, useContext, useState } from "react";

const ChatbotContext = createContext<any>(null);

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ChatbotContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ChatbotContext.Provider>
  );
}

export function useChatbot() {
  return useContext(ChatbotContext);
}
