import React from "react";

interface ChatMessageProps {
  sender: string;
  message: string;
  isOwnMessage?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  message,
  isOwnMessage,
}) => {
  const isSystemMessage = sender === "sender";

  return (
    <div
      className={`flex ${
        isSystemMessage
          ? "justify-start"
          : isOwnMessage
          ? "justify-end"
          : "justify-start"
      }mb-3`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isSystemMessage
            ? "bg-gray-800 text-white text-center text-sm"
            : isOwnMessage
            ? "bg-blue-500 text-white"
            : "bg-white text-black"
        }`}>
        {!isSystemMessage && <p className="text-sm font-bold">{sender}</p>}
        <p className={``}>{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
