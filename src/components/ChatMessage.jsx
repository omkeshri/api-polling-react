import React from "react";

const ChatMessage = () => {
  return (
    <div className="flex gap-4 p-1 mx-2">
      <p className="font-medium w-20 truncate">{message.name}</p>
      <p>{message.message}</p>
    </div>
  );
};

export default ChatMessage;
