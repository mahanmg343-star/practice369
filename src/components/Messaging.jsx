import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const initialMessages = [
  {
    id: 1,
    type: "text",
    sender: "them",
    date: "Tue May 21",
    time: "4:02 PM",
    text: "Hey John, I am looking for the best admin template. Could you please help me to find it out? 🙂",
  },
  {
    id: 2,
    type: "call",
    sender: "me",
    date: "Tue May 21",
    time: "4:02 PM",
    callDuration: "0:27",
    recording: { src: "", duration: "1:23" },
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10",
  },
];

const contact = {
  name: "Tiffany May",
  phone: "+971 (825) 1256",
  initials: "TM",
};

const Messaging = () => {
  const [messages, setMessages] = useState(initialMessages);

  const handleSend = (text) => {
    const newMessage = {
      id: Date.now(),
      type: "text",
      sender: "me",
      date: "Today",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      text,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendVoice = () => {
    const newMessage = {
      id: Date.now(),
      type: "voice",
      sender: "me",
      date: "Today",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      voice: { src: "", duration: "0:12" },
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <ChatHeader contact={contact} />

      <div className="flex-1 overflow-y-auto px-5 py-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <ChatInput onSend={handleSend} onSendVoice={handleSendVoice} />
    </div>
  );
};

export default Messaging;
