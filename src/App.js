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
import UserInfo from "./components/container-components/resources/UserInfo";
import ProductInfo from "./components/container-components/resources/ProductInfo";

import UserLoader from "./components/container-components/user-loader/UserLoader";
import ResourceLoader from "./components/container-components/resource-loader/ResourceLoader";
import DataSource from "./components/container-components/data-source/DataSource";
import axios from "axios";
import UncontrolledForm from "./components/controlled-uncontrolled-components/UncontrolledForm";
import ControlledForm from "./components/controlled-uncontrolled-components/ControlledForm";
import ControlledModal from "./components/controlled-uncontrolled-components/ControlledModal";
import UnconrtolledOnBoardingFlow from "./components/controlled-uncontrolled-components/UnconrtolledOnBoardingFlow";
import ConrtolledOnBoardingFlow from "./components/controlled-uncontrolled-components/ControlledOnBoardingFlow";
import printProps from "./components/higher-order-components/printProps";
import { withUser } from "./components/higher-order-components/withUser";
import { UserInfoForm } from "./components/higher-order-components/UserInfoForm";

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
      <div className={`collapsible ${collapsed && "collapsed"}`}>
        {children}
      </div>
    </>
  );
};

const userIds = ["123", "234", "345"];

const getServerData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

//this function takes a key and returns a function, so when I call it
//in the prop I can just call it by name 💡
const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <p>{message}</p>;

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step One</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step Two</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step Four</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

const StepThree = ({ goToNext }) => (
  <>
    <h1>Step Three</h1>
    <p>Congratulation, you qualify for our senior discount.</p>
    <button onClick={() => goToNext({})}>Next</button>
  </>
);

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  //turns children in an array in case is not
  //turns children in an array in case is not
  const onNext = (stepData) => {
    const updatedData = { ...onBoardingData, ...stepData };
    setOnBoardingData(updatedData);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <h1>React Design Patterns</h1>
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
            <h2>Current User Loader</h2>
            <p>Loads data from external API</p>
            <Collapsible componentType={"User Loader"}>
              <ul>
                {userIds.map((id) => (
                  <li key={id}>
                    <UserLoader userId={id}>
                      <UserInfo />
                    </UserLoader>
                  </li>
                ))}
              </ul>
            </Collapsible>
            <h2>Generic resource loader</h2>
            <Collapsible componentType={"Generic Resource Loader"}>
              <h3>Loading user</h3>
              <ResourceLoader resourceUrl="/users/123" resourceName="user">
                <UserInfo />
              </ResourceLoader>
              <h3>Loading product</h3>
              <ResourceLoader
                resourceUrl="/products/1234"
                resourceName="product"
              >
                <ProductInfo />
              </ResourceLoader>
            </Collapsible>
            <h2>Data Source</h2>
            <Collapsible componentType={"Data Source"}>
              <h3>Data from Server</h3>
              <ul>
                {userIds.map((id) => (
                  <li>
                    <DataSource
                      getDataFunc={() => getServerData(`/users/${id}`)}
                      resourceName={"user"}
                    >
                      <UserInfo />
                    </DataSource>
                  </li>
                ))}
              </ul>

              <h3>Data from local storage</h3>
              <DataSource
                getDataFunc={getLocalStorageData("message")}
                resourceName="message"
              >
                <Text />
              </DataSource>
            </Collapsible>
          </Collapsible>
        </li>
        <li>
          <Collapsible componentType={"Controlled and uncontrolled components"}>
            <h2>Uncontrolled form</h2>
            <UncontrolledForm />
            <h2>Controlled form</h2>
            <ControlledForm />
            <h2>Controlled Modal</h2>
            <ControlledModal
              shouldShow={shouldShowModal}
              onRequestClose={() => {
                setShouldShowModal(false);
              }}
            >
              <h3>This is a modal</h3>
            </ControlledModal>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}>
              {shouldShowModal ? "Close Modal" : "Open Modal"}
            </button>

            <h3>Uncontrolled On Boarding Flow</h3>
            <UnconrtolledOnBoardingFlow onFinish={(data) => console.log(data)}>
              <StepOne />
              <StepTwo />
              <StepThree />
            </UnconrtolledOnBoardingFlow>

            <h3>Controlled Onboarding Flow</h3>
            <ConrtolledOnBoardingFlow
              currentIndex={currentIndex}
              onNext={onNext}
              onFinish={(data) => console.log(data)}
            >
              <StepOne />
              <StepTwo />
              {onBoardingData.age >= 62 && <StepThree />}
              <StepFour />
            </ConrtolledOnBoardingFlow>
          </Collapsible>
        </li>
        <li>
          <Collapsible componentType={"Higher Order Components"}>
            <h2>Print Props (but we are not passing the usef info)</h2>
            <UserInfoWrapped
              a={1}
              b={"Hey this is a wrapper"}
              c={{ name: "cree", age: 33 }}
            />
            <h2>User Info with data</h2>
            <UserInfoWithLoader />
            <h2>User Form</h2>
            <UserInfoForm />
          </Collapsible>
        </li>
      </ul>
    </>
  );
}

export default App;
