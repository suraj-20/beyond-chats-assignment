import React, { useEffect, useState } from "react";
import { fetchChats } from "../services/api";
import Header from "../components/Header";
import ChatList from "../components/ChatList";

const Home = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = async () => {
      const fetchedChats = await fetchChats();
      setChats(fetchedChats);
    };

    loadChats();
  }, []);

  // console.log(chats);
  return (
    <div className="home">
      <Header title="Telegram" />
      <ChatList chats={chats} />
    </div>
  );
};

export default Home;
