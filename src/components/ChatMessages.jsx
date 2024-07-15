import React, { useState, useEffect } from "react";
import { getChatMessages } from "../services/api";
import "../styles/ChatMessages.css";

const ChatMessages = ({ chatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      fetchMessages();
    }
  }, [chatId]);

  const fetchMessages = async () => {
    try {
      const response = await getChatMessages(chatId);
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <div className="messages-container">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message-item ${message.is_sent ? "sent" : "received"}`}
        >
          <p className="message-content">{message.content}</p>
          <span className="message-time">{message.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
