import "./App.css";
import { ButtonPrimary } from "./components/Buttons";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <ButtonPrimary onClick={() => console.log("Clicked")}>
        primary
      </ButtonPrimary>
    </>
  );
}

export default App;
