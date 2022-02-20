import React from "react";

function printProps(Component) {
  return (props) => {
    console.log(props);
    return <Component {...props} d={"added prop"} />;
  };
}

export default printProps;
