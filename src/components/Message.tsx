import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Textarea } from "./ui/textarea";
import "../styles/Message.css";

export function Message() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Sent: " + message);
  };

  return (
    <div className="justify-end flex items-center p-5 px-10  messageBox">
      <Textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here."
        className="mx-5 bg-white text-gray-950"
      />
      <Button type="submit" onClick={() => handleSend}>
        <SendHorizontal />
      </Button>
    </div>
  );
}
