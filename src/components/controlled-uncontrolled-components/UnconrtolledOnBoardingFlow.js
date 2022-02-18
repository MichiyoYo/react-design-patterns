import React, { useState } from "react";

function UnconrtolledOnBoardingFlow({ children, onFinish }) {
  const [onBoardingData, setOnBoardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  //turns children in an array in case is not
  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updatedData = { ...onBoardingData, ...stepData };

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updatedData);
    }
    setOnBoardingData(updatedData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
}

export default UnconrtolledOnBoardingFlow;
