//import { Col, Row } from "react-bootstrap";
import "./App.css";
import Layout from "./components/Layout";
import ChatPage from "./pages/ChatPage";

function App() {
  localStorage.setItem("senderId", "1");
  localStorage.setItem("receiverId", "2");

  const senderId = localStorage.getItem("senderId");
  const receiverId = localStorage.getItem("receiverId");

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

  localStorage.setItem("conversations", JSON.stringify(conversations));

  return (
    <>
      <Layout>
        <ChatPage />
      </Layout>
    </>
  );
}

export default App;
