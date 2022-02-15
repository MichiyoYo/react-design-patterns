import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

export const SplitScreen = ({
  left: LeftComponent,
  right: RightComponent,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  return (
    <Container>
      <Pane weight={leftWeight}>
        <LeftComponent />
      </Pane>
      <Pane weight={rightWeight}>
        <RightComponent />
      </Pane>
    </Container>
  );
};
