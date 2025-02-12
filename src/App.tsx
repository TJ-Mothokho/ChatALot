//import { Col, Row } from "react-bootstrap";
import "./App.css";
import Login from "@/components/Login";
import { Toaster } from "./components/Toaster";

function App() {
  return (
    <>
      <Login />
      <Toaster message="toast" description="user logged in" />
    </>
  );
}

export default App;
