import { useState } from "react";
import Leftsied from "./components/Leftsied";
import Messaging from "./components/Messaging";
import Rightside from "./components/Rightside";

const TABS = [
  { id: "nav", label: "Menu" },
  { id: "chat", label: "Chat" },
  { id: "info", label: "Info" },
];

function App() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="h-screen flex flex-col">
      {/* Mobile tab switcher - hidden on desktop */}
      <div className="flex md:hidden border-b border-default">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? "text-fg-brand border-b-2 border-brand"
                : "text-gray-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content: 3 columns on desktop, single active section on mobile */}
      <div className="flex-1 flex overflow-hidden">
        <div
          className={`${activeTab === "nav" ? "block" : "hidden"} md:block w-full md:w-1/4 h-full overflow-y-auto`}
        >
          <Leftsied />
        </div>

        <div
          className={`${activeTab === "chat" ? "block" : "hidden"} md:block w-full md:w-2/4 h-full overflow-y-auto`}
        >
          <Messaging />
        </div>

        <div
          className={`${activeTab === "info" ? "block" : "hidden"} md:block w-full md:w-1/4 h-full overflow-y-auto`}
        >
          <Rightside />
        </div>
      </div>
    </div>
  );
}

export default App;
