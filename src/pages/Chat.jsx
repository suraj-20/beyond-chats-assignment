import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow.jsx";
import { fetchMessages } from "../services/api";

const Chat = () => {
  const { id } = useParams();
  const [chat, setChat] = useState(null);
  const [messages, setMessages] = useState([]);
  // console.log(chat);

  useEffect(() => {
    // In a real app, you'd fetch the chat details here
    setChat({ id, name: `Chat ${id}`, });
    fetchMessages(id).then(setMessages);
  }, [id]);

  if (!chat) return <div>Loading...</div>;

  return (
    <div className="chat-page">
      <Header title={chat.name} />
      <ChatWindow chat={chat} messages={messages} />
    </div>
  );
};

export default Chat;
