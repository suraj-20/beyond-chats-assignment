import React, { useState } from "react";

const MessageInput = ({ chatId }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message to your API
    console.log("Sending message:", message, "to chat:", chatId);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 d-flex justify-content-between gap-3"
    >
      <input
        type="text"
        value={message}
        className="form-control"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default MessageInput;
