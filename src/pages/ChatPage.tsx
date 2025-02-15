import DisplayAvatar from "@/components/DisplayAvatar";
import { Message } from "@/components/Message";
import MessageBubble from "@/components/MessageBubble";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "@/components/Toaster";
import { useNavigate } from "react-router-dom";
//import { Paperclip } from "lucide-react";
//import React, { ReactNode } from "react";

interface Props {
  receiverID: string;
}

const ChatPage = ({ receiverID }: Props) => {
  const userID = localStorage.getItem("userID");

  const [conversations, setConversations] = useState([
    {
      message: "",
      senderId: "",
    },
  ]);

  const getConversation = useCallback(async () => {
    await axios
      .get("" + receiverID)
      .then((results) => {
        setConversations(results.data);
      })
      .catch((error) => {
        Toaster({
          message: "Error",
          description: `Couldn't load converstion. ${error}`,
        });
      });
  }, [receiverID]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate("/login");
    }

    getConversation();
  }, [getConversation, navigate]);

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
                conversation.senderId === userID ? "text-right" : "text-left"
              }`}
            >
              {conversation.senderId === userID ? "Me" : "Receiver"}
            </p>
            <MessageBubble
              message={conversation.message}
              isSent={conversation.senderId === userID}
            />
          </div>
        ))
      ) : (
        <p>No conversations</p>
      )}

      <div className="items-end">
        <Message />
      </div>

      <Toaster
        message="Couldn't load chats"
        description="Something went wrong"
        onClose={() => console.log("toast")}
      />
    </div>
  );
};

export default ChatPage;
