import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./split-screen/components/SplitScreen";
import styled from "styled-components";

const LeftHandComponent = () => {
  return <h1 style={{ background: "green" }}>Left</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ background: "red" }}>Right</h1>;
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppWrapper>
      <SplitScreen children leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RightHandComponent />
      </SplitScreen>
    </AppWrapper>
  );
}

export default App;
