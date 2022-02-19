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

/**
 * This modal is a controlled component because its state is managed by  the parent
 * component and it is passed to this component through the props
 */
function ControlledModal({ shouldShow, onRequestClose, children }) {
  return shouldShow ? (
    <ModalBackground onClick={onRequestClose}>
      <ModalBody>
        <button onClick={onRequestClose}>&times;</button>
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null;
}

export default ControlledModal;
