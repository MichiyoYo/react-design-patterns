import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBody = styled.div`
  width: 40%;
  background: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  button {
    align-self: flex-end;
    font-size: 30px;
    background: transparent;
    border: 0;
    cursor: pointer;
  }
`;

function Modal({ children }) {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody>
            <button onClick={() => setShouldShow(false)}>&times;</button>
            {children}
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

export default Modal;
