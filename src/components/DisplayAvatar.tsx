import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  image: string;
  username: string;
  url: string;
  className?: string;
  hover?: boolean;
}

const DisplayAvatar = ({
  image,
  username,
  url,
  className = "",
  hover = true,
}: Props) => {
  const [fallback, setFallback] = useState("");
  useEffect(() => {
    if (username) {
      setFallback(username[0].toUpperCase() + username[1].toUpperCase());
    }
  }, [username]);
  return (
    <div className={`row ${hover ? "hover:bg-sidebar-accent" : ""} `}>
      <a href={url} className="">
        <div className={`flex ${className}`}>
          <Avatar>
            <AvatarImage src={image} />
            {username ? <AvatarFallback>{fallback}</AvatarFallback> : null}
          </Avatar>
          <span className="text-lg mx-5">{username}</span>
        </div>
      </a>
    </div>
  );
};

export default DisplayAvatar;
