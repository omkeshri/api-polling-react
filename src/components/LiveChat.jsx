import React, { useEffect, useState } from "react";
import { addChat } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../utils/helpers";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.chat);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("api");
      const name = generateRandomName();
      const message = generateRandomMessage();

      dispatch(
        addChat({
          name: name,
          message: message,
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const handleSend = (e) => {
    dispatch(addChat({
        name: "User",
        message: inputMessage
    }))
    setInputMessage("");
  }
  return (
    <div className="h-[30rem] w-[26rem] m-auto mt-10 border border-gray-400 bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-lg overflow-y-auto flex flex-col justify-end gap-2 no-scrollbar">
      {message.map((m, index) => (
        <ChatMessage key={index} message={m} />
      ))}
      <div className="flex items-center gap-2 border-t border-gray-300 bg-white rounded-b-lg">
        <input
          className="flex-1 border border-gray-400 py-2 px-3 font-medium bg-white rounded-lg focus:outline-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-6 cursor-pointer py-2 rounded-lg font-medium  transition duration-300"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
