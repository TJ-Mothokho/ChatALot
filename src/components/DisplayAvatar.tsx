import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  image: string;
  username: string;
  fallback: string;
}

const DisplayAvatar = ({ image, username, fallback }: Props) => {
  return (
    <div className="row">
      <a href="#">
        <div className="flex justify-center">
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
