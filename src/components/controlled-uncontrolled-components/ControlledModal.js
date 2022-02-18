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
 * This modal is an uncontrolled component because its state resides in itself and
 * there is no way that a parent component could control the modal's state
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
