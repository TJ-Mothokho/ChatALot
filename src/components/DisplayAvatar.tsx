import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  image: string;
  username: string;
  fallback: string;
  url: string;
  className?: "justify-center" | "";
}

const DisplayAvatar = ({
  image,
  username,
  fallback,
  url,
  className = "",
}: Props) => {
  return (
    <div className="row">
      <a href={url}>
        <div className={`flex ${className}`}>
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <span className="text-lg mx-5">{username}</span>
        </div>
      </a>
    </div>
  );
};

export default DisplayAvatar;
