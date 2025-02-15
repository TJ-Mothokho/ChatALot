//import { Col, Row } from "react-bootstrap";
import "./App.css";
import Layout from "./components/Layout";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
// import Layout from "./components/Layout";
// import ChatPage from "./pages/ChatPage";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  const users = [
    {
      username: "rafxjay",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQErgNRo09axdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731456261506?e=1744848000&v=beta&t=CxJYxuoes5hdaZplzqIcCYnPs3q8vycg_jGtvW1q4ZU",
      fallback: "CN",
      url: "#",
    },
    {
      username: "johndoe",
      image: "https://github.com/shadcn.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "janedoe",
      image: "https://github.com/janedoe.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "alice",
      image: "https://github.com/alice.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "bobsmith",
      image: "https://github.com/bobsmith.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "charlie",
      image: "https://github.com/charlie.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "david",
      image: "https://github.com/david.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "eve",
      image: "https://github.com/eve.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "frank",
      image: "https://github.com/frank.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "grace",
      image: "https://github.com/grace.png",
      fallback: "CN",
      url: "#",
    },
    {
      username: "heidi",
      image: "https://github.com/heidi.png",
      fallback: "CN",
      url: "#",
    },
  ];

  localStorage.setItem("users", JSON.stringify(users));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/Home"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/Chat/:ReceiverID"
            element={
              <Layout>
                <ChatPage receiverID="" />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
