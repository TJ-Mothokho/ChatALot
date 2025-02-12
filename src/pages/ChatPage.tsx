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
      <div className="justify-end flex items-center p-5"></div>

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
