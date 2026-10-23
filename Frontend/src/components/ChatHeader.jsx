import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore';
import { XIcon } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const ChatHeader = () => {

    const { selectedUser, setSelectedUser } = useChatStore();
    const {onlineUsers} = useAuthStore()
    const isOnline = onlineUsers.includes(selectedUser._id)

    useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-[#10271F]/80 border-b
   border-emerald-900/50 max-h-[84px] px-6 flex-1">

    <div className="flex items-center space-x-3">

        <div className={`avatar ${isOnline ? "Online" : "Offline"}`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
          </div>
        </div>

        <div>
          <h3 className="text-[#E8E2D4] font-medium">{selectedUser.fullName}</h3>
          <p className="text-emerald-100/60 text-sm">{ isOnline ? "Online" : "Offline" }</p>
        </div>
    </div>

     <button onClick={() => setSelectedUser(null)}>
        <XIcon className="w-5 h-5 text-emerald-100/60 hover:text-[#D4AF65] transition-colors cursor-pointer" />
      </button>
   </div>
  )
}

export default ChatHeader