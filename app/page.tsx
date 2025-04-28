"use client";
import { use, useState } from "react";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

export default function Home() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState<
    {
      sender: string;
      messages: string;
    }[]
  >([]);

  return (
    <div className="flex flex-col max-w-[700px] mx-auto mt-24 justify-center w-full">
      {!joined ? (
        <div className="flex flex-col w-full max-w-3xl items-center ">
          <h1 className="mb-4 t-2xl font-bold"> Join a Room</h1>
          input
        </div>
      ) : (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="mb-4 text-2xl text-bold">Room: 1</h1>

          <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border-2 rounded-large ">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                message={msg.messages}
                isOwnMessage={msg.sender === userName}
              />
            ))}
          </div>
          <ChatForm
            onSendMessage={(message) => {
              console.log(message);
            }}
          />
        </div>
      )}
    </div>
  );
}
