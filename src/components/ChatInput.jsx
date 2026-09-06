import { useState } from "react";
import {
  FaRegSmile,
  FaRegImage,
  FaMicrophone,
  FaPaperclip,
  FaTelegramPlane,
} from "react-icons/fa";

const ChatInput = ({ onSend, onSendVoice }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex items-center gap-3 px-5 py-3 border-t border-default">
      <button type="button" className="text-gray-400 hover:text-fg-brand">
        <FaRegSmile size={18} />
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message"
        className="flex-1 text-sm focus:outline-none bg-transparent"
      />

      <button type="button" className="text-gray-400 hover:text-fg-brand">
        <FaRegImage size={18} />
      </button>
      <button
        type="button"
        onClick={onSendVoice}
        className="text-gray-400 hover:text-fg-brand"
      >
        <FaMicrophone size={18} />
      </button>
      <button type="button" className="text-gray-400 hover:text-fg-brand">
        <FaPaperclip size={18} />
      </button>

      <button
        type="button"
        onClick={handleSend}
        className="w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"
      >
        <FaTelegramPlane size={15} />
      </button>
    </div>
  );
};

export default ChatInput;
