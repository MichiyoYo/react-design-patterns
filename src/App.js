import "./App.css";
import { SplitScreen } from "./components/layout-components/split-screen/SplitScreen";
import styled from "styled-components";
import {
  people,
  products,
} from "./components/layout-components/lists/resources";
import List from "./components/layout-components/lists/List";
import SmallPersonListItem from "./components/layout-components/lists/people/SmallPersonListItem";
import LargePersonListItem from "./components/layout-components/lists/people/LargePersonListItem";
import SmallProductListItem from "./components/layout-components/lists/products/SmallProductListItem";
import LargeProductListItem from "./components/layout-components/lists/products/LargeProductListItem";
import Modal from "./components/layout-components/modal/Modal";
import { useState } from "react";
import CurrentUserLoader from "./components/container-components/CurrentUserLoader";
import UserInfo from "./components/container-components/UserInfo";

const LeftHandComponent = ({ name }) => {
  return <h1 style={{ background: "green" }}>{name}</h1>;
};

const RightHandComponent = ({ message }) => {
  return <h1 style={{ background: "red" }}>{message}</h1>;
};

const Collapsible = ({ componentType, children }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <>
      <button onClick={() => setCollapsed(!collapsed)}>{componentType}</button>
      <div className={`collapsible ${collapsed ? "collapsed" : ""}`}>
        {children}
      </div>
    </>
  );
};

function App() {
  return (
    <ul>
      <li>
        <Collapsible componentType={"Layout Components"}>
          <Modal>
            <h2 style={{ marginTop: 0 }}>This is Cree's modal</h2>
            <p>It's very well done and so cool! 👍</p>
          </Modal>
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
        </Collapsible>
      </li>
      <li>
        <Collapsible componentType={"Container Components"}>
          <CurrentUserLoader>
            <UserInfo />
          </CurrentUserLoader>
        </Collapsible>
      </li>
    </ul>
  );
}

export default App;
