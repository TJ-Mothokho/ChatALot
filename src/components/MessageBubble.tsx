import React from "react";

interface Props {
  message: string;
  isSent: boolean;
}
const MessageBubble = ({ message, isSent }: Props) => {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-xs p-4 rounded-xl ${
          isSent ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <p>{message}</p>
        <div
          className={`absolute ${
            isSent ? "right-0" : "left-0"
          } bottom-0 w-0 h-0 border-l-8 border-t-8 ${
            isSent
              ? "border-blue-500 border-l-transparent"
              : "border-gray-200 border-l-transparent"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default MessageBubble;
