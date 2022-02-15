import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./split-screen/components/SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ background: "green" }}>Left</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ background: "red" }}>Right</h1>;
};

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
