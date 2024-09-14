import { createContext, useEffect, useState } from "react";
import Context from "./Context";
import Child from "./Child";
import UseReducer from "./UseReducer";
import LifeCycle from "./LifeCycle";
const UseState = () => {
  const [counter, setCounter] = useState(0);

  const increseCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    document.title = `${counter}`;
  }, [counter]);
  return (
    <Context>
      <Child />
      <UseReducer />
      <LifeCycle name={"props name"}/>
      <h1>{counter}</h1>
      <button onClick={increseCounter}>Increase</button>
    </Context>
  );
};

export default UseState;
