import React, { useContext } from "react";
// import { AppContext } from "./UseState";

const Child = () => {
  // const data = useContext(AppContext);
  // console.log("data", data);

  return <div className="child-cls">Child</div>;
};

export default React.memo(Child);
