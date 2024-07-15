import React from "react";
import { Link } from "react-router-dom";
import "../styles/ChatList.css";

const ChatList = ({ chats }) => {
  console.log(chats);
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <Link to={`/chat/${chat.id}`} key={chat.id}>
          <div className="chat-item">
            <div>
              <h3>{chat.creator.name}</h3>
              <p>{chat.msg_count}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
