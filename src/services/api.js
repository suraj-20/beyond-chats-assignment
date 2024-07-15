import axios from "axios";

const BASE_URL = "https://devapi.beyondchats.com/api";

export const fetchChats = async (page = 1) => {
  try {
    const response = await axios.get(`${BASE_URL}/get_all_chats?page=${page}`);
    console.log(response.data.data.data);
    return response.data.data.data; // Adjust this path based on your actual response structure
  } catch (error) {
    console.error("Error fetching chats:", error);
    return [];
  }
};

export const fetchMessages = async (chatId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/get_chat_messages?chat_id=${chatId}`
    );
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
};
