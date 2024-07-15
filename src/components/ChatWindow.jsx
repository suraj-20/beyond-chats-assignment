import { useEffect, useRef } from "react";
import MessageInput from "../components/MessageInput";
import "../styles/ChatMessages.css";

const ChatWindow = ({ chat, messages }) => {
  const messageListRef = useRef(null);
  console.log(chat);

  useEffect(() => {
    // Scroll to the bottom of the messages when new messages are added
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const messageList = Array.isArray(messages) ? messages : [];
  console.log("messageList", messageList);
  return (
    <div className="chat-window">
      <div className="chat-with"></div>
      <div className="messages" ref={messageListRef}>
        {messageList.map((message) => {
          return (
            <div
              key={message.id}
              className={`message ${
                message.sender_id === Number(1) ? "sent" : "received"
              }`}
            >
              <div className="message-info">
                <strong>{message.sender.name}:</strong>
              </div>
              <div className="message-content">{message.message}</div>
              <div className="message-timestamp">
                {new Date(message.created_at).toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput chatId={chat.id} />
    </div>
  );
};

export default ChatWindow;
