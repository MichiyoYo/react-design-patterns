import React, { useState, useEffect } from "react";
import axios from "axios";

function DataSource({ getDataFunc = () => {}, resourceName, children }) {
  const [state, setState] = useState(null);
  //we call toArray on children to make sure that children is an array
  const arrayChildren = React.Children.toArray(children);
  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);

  return (
    <>
      {/**
       * There is an utility called React.Children.map that takes the array on which to iterate
       * and a callback function
       */}
      {React.Children.map(arrayChildren, (child) => {
        if (React.isValidElement(child)) {
          /** React.cloneElement allows us to add props to the child */
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
}

export default DataSource;
