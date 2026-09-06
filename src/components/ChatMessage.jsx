import { FaPhoneAlt } from "react-icons/fa";
import AudioPlayer from "./Audiopleyer";

const ChatMessage = ({ message = {} }) => {
  const isMe = message.sender === "me";

  if (message.type === "voice") {
    return (
      <div
        className={`flex flex-col max-w-[70%] my-2 ${isMe ? "items-end self-end ml-auto" : "items-start self-start"}`}
      >
        <span className="text-xs text-gray-400 mb-1 px-1">
          {message.date} | {message.time}
        </span>
        <div className="w-64">
          <AudioPlayer
            src={message.voice?.src}
            duration={message.voice?.duration}
          />
        </div>
      </div>
    );
  }

  if (message.type === "call") {
    return (
      <div className="flex flex-col items-end my-3">
        <span className="text-xs text-gray-400 mb-1 mr-1">
          {message.date} | {message.time}
        </span>

        <div className="flex items-start gap-3">
          <div className="w-80 rounded-2xl bg-indigo-50 border border-indigo-100 p-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-indigo-500">
                <FaPhoneAlt size={14} />
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-600">
                  Call ended
                </p>
                <p className="text-xs text-gray-500">
                  You called {message.callDuration}
                </p>
              </div>
            </div>

            {message.recording && (
              <div className="mt-3 pt-3 border-t border-indigo-100">
                <p className="text-xs font-medium text-indigo-500 mb-1">
                  Recording
                </p>

                <AudioPlayer
                  src={message.recording.src}
                  duration={message.recording.duration}
                />
              </div>
            )}
          </div>

          {message.avatar && (
            <img
              src={message.avatar}
              alt=""
              className="w-9 h-9 rounded-full object-cover mt-1"
            />
          )}
        </div>
      </div>
    );
  }

  // text message
  return (
    <div
      className={`flex flex-col max-w-[70%] my-2 ${isMe ? "items-end self-end ml-auto" : "items-start self-start"}`}
    >
      <span className="text-xs text-gray-400 mb-1 px-1">
        {message.date} | {message.time}
      </span>
      <div
        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isMe ? "bg-blue-500 text-white" : "bg-gray-100 text-body"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
