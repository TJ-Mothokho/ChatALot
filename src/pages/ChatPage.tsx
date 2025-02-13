import DisplayAvatar from "@/components/DisplayAvatar";
import { Message } from "@/components/Message";
import MessageBubble from "@/components/MessageBubble";
import { useEffect, useState } from "react";
//import { Paperclip } from "lucide-react";
//import React, { ReactNode } from "react";

// interface Props {
//   username: string;
//   avatar: ReactNode;
// }

const ChatPage = () => {
  const senderId = localStorage.getItem("senderId");
  const receiverId = localStorage.getItem("receiverId");

  const [conversations, setConversations] = useState([
    {
      message: "Hello!",
      senderId: senderId,
      receiverId: receiverId,
    },
  ]);

  useEffect(() => {
    const conversation = localStorage.getItem("conversations");
    if (conversation != null) {
      setConversations(JSON.parse(conversation));
    }
  }, []);

  return (
    <div className="px-10">
      <div className="justify-start flex items-center p-5 bg-white text-black hover:bg-sidebar-accent">
        <DisplayAvatar
          hover={false}
          username="rafxjay"
          image="https://media.licdn.com/dms/image/v2/D4D03AQErgNRo09axdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731456261506?e=1744848000&v=beta&t=CxJYxuoes5hdaZplzqIcCYnPs3q8vycg_jGtvW1q4ZU"
          url="#"
          className="justify-center"
        />
      </div>

      {conversations ? (
        conversations.map((conversation, index) => (
          <div key={index}>
            <p
              className={`${
                conversation.senderId === senderId ? "text-right" : "text-left"
              }`}
            >
              {conversation.senderId === senderId ? "Me" : "Receiver"}
            </p>
            <MessageBubble
              message={conversation.message}
              isSent={conversation.senderId === senderId}
            />
          </div>
        ))
      ) : (
        <p>No conversations</p>
      )}

      <div className="items-end">
        <Message />
      </div>
    </div>
  );
};

export default ChatPage;
