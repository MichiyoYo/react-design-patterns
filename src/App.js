import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./split-screen/components/SplitScreen";
import styled from "styled-components";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ background: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ background: "red" }}>{message}</h1>;
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
        <LeftHandComponent name="Cree" />
        <RightHandComponent message="E' babba" />
      </SplitScreen>
    </AppWrapper>
  );
}

export default App;
