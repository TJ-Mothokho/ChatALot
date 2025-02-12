import DisplayAvatar from "@/components/DisplayAvatar";
import { Message } from "@/components/Message";
import MessageBubble from "@/components/MessageBubble";
//import React, { ReactNode } from "react";

// interface Props {
//   username: string;
//   avatar: ReactNode;
// }

const ChatPage = () => {
  const senderId = 1;
  const receiverId = 2;

  const conversations = [
    {
      message: "Hello!",
      senderId: senderId,
      receiverId: receiverId,
    },
    {
      message: "Hi! How are you?",
      senderId: receiverId,
      receiverId: senderId,
    },
    {
      message: "I'm good, thanks! How about you?",
      senderId: senderId,
      receiverId: receiverId,
    },
    {
      message: "I'm doing great!",
      senderId: receiverId,
      receiverId: senderId,
    },
  ];

  return (
    <div className="px-10">
      <div className="justify-start flex items-center p-5 bg-white text-black">
        <DisplayAvatar
          username="rafxjay"
          fallback="CN"
          image="https://media.licdn.com/dms/image/v2/D4D03AQErgNRo09axdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731456261506?e=1744848000&v=beta&t=CxJYxuoes5hdaZplzqIcCYnPs3q8vycg_jGtvW1q4ZU"
          url="#"
          className="justify-center"
        />
      </div>

      {conversations.map((conversation, index) => (
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
      ))}

      <div className="items-end">
        <Message />
      </div>
    </div>
  );
};

export default ChatPage;
