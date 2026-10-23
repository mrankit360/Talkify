import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-box bg-transparent p-2 m-2 flex w-full">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab flex-1 ${
          activeTab === "chats" ? "bg-emerald-500/20 text-[#D4AF65]" : "text-emerald-100/60"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab flex-1 ${
          activeTab === "contacts" ? "bg-emerald-500/20 text-[#D4AF65]" : "text-emerald-100/60"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;