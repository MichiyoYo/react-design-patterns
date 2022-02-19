import React, { useState } from "react";

function ConrtolledOnBoardingFlow({
  children,
  onFinish,
  currentIndex,
  onNext,
}) {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  //turns children in an array in case is not
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default ConrtolledOnBoardingFlow;
