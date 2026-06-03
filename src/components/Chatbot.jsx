import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am your Krishi Sahayak AI. How can I assist you with farming today?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatContainerRef = useRef(null); // UPDATED Ref

  // UPDATED useEffect to conditionally scroll
  useEffect(() => {
    feather.replace();
    const container = chatContainerRef.current;
    if (container) {
      // Only scroll if the content height is greater than the visible area
      if (container.scrollHeight > container.clientHeight) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your query. I am analyzing it and will provide a response shortly.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1500);
  };

  return (
    // The .chatbot-wrapper is no longer in your CSS, you can remove it if you wish
    <div className="chatbot-wrapper">
      <div className="chatbot-page">
        <header className="chatbot-header">
          <Link to="/" className="back-button">
            <i data-feather="arrow-left"></i> Back to Home
          </Link>
          <h1>Krishi AI Assistant</h1>
        </header>

        {/* UPDATED: Added the ref here */}
        <main className="chat-messages" ref={chatContainerRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={`message-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {/* REMOVED the empty div that had the old ref */}
        </main>

        <footer className="chat-input-form">
          <form onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about crops, weather, or schemes..."
              autoComplete="off"
            />
            <button type="submit">
              <i data-feather="send"></i>
            </button>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Chatbot;