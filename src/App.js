import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./components/split-screen/SplitScreen";
import styled from "styled-components";
import { people, products } from "./components/lists/resources";
import List from "./components/lists/List";
import SmallPersonListItem from "./components/lists/people/SmallPersonListItem";
import LargePersonListItem from "./components/lists/people/LargePersonListItem";
import SmallProductListItem from "./components/lists/products/SmallProductListItem";
import LargeProductListItem from "./components/lists/products/LargeProductListItem";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ background: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ background: "red" }}>{message}</h1>;
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <h1>Split Screen</h1>
      <SplitScreen children leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Cree" />
        <RightHandComponent message="E' babba" />
      </SplitScreen>
      <h1>Lists</h1>
      <h2>Small People List</h2>
      <List
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <h2>Large People List</h2>
      <List
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <h2>Small Product List</h2>
      <List
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <h2>Large Product List</h2>
      <List
        items={products}
        resourceName="product"
        itemComponent={LargeProductListItem}
      />
    </AppWrapper>
  );
}

export default App;
