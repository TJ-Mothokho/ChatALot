import { Col, Row } from "react-bootstrap";
import "./App.css";
import { ButtonDanger } from "./components/Buttons";

function App() {
  return (
    <>
      <Row>
        <Col>
          <input className="form-control" placeholder="hello" />
        </Col>

        <Col>
          <ButtonDanger onClick={() => console.log("Clicked")}>
            primary
          </ButtonDanger>
        </Col>
      </Row>
    </>
  );
}

export default App;
