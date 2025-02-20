import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5145/chatHub") // Make sure the backend URL is correct
  .withAutomaticReconnect()
  .build();

export const startConnection = async () => {
  if (connection.state === signalR.HubConnectionState.Connected) {
    console.log("SignalR is already connected.");
    return;
  }

  try {
    await connection.start();
    console.log("Connected to SignalR");
  } catch (error) {
    console.error("Connection error:", error);
  }
};

// export const startConnection = async () => {
//   try {
//     await connection.start();
//     console.log("Connected to SignalR");
//   } catch (error) {
//     console.error("Connection error:", error);
//   }
// };

interface Props {
  senderId: string;
  receiverId: string;
  message: string;
}

export const sendMessage = async ({ senderId, receiverId, message }: Props) => {
  try {
    console.log(message + "SENDER: " + senderId + "RECEIVER: " + receiverId);
    await connection.invoke("SendMessage", senderId, receiverId, message);
  } catch (error) {
    console.error("Send message error:", error);
  }
};

export const onReceiveMessage = (
  callback: (message: {
    senderId: string;
    receiverId: string;
    message: string;
  }) => void
) => {
  connection.on(
    "ReceiveMessage",
    (senderId: string, receiverId: string, message: string) => {
      callback({ senderId, receiverId, message });
    }
  );
};
