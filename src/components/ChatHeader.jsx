import { FaPhoneAlt, FaRegStickyNote, FaEllipsisV } from "react-icons/fa";

const ChatHeader = ({ contact = { name: "", phone: "", initials: "" } }) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-default">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold text-sm">
          {contact.initials}
        </div>
        <div>
          <p className="font-semibold text-heading text-sm">{contact.name}</p>
          <p className="text-xs text-gray-400">{contact.phone}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-400">
        <button type="button" className="hover:text-fg-brand">
          <FaPhoneAlt size={14} />
        </button>
        <button type="button" className="hover:text-fg-brand">
          <FaRegStickyNote size={16} />
        </button>
        <button type="button" className="hover:text-fg-brand">
          <FaEllipsisV size={14} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
