//import { Col, Row } from "react-bootstrap";
import "./App.css";
import Register from "@/components/Register";
import { Toaster } from "./components/Toaster";

function App() {
  return (
    <>
      <Register />
      <Toaster message="toast" description="user logged in" />
    </>
  );
}

export default App;
