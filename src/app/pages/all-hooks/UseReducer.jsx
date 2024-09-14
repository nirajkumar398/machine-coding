import { useReducer } from "react";

export const initialState = {
  counter: 0,
};
// export const reducer = (state, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case "increase":
//       return { ...state, counter: state.counter + 1 };

//     case "decrease":
//       return { ...state, counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

export const reducer1 = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + 1 };
    case "Decrese":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Use Reducer {state.counter}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "increase",
            data: "niraj",
          })
        }
      >
        Increase
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrease",
            data: "niraj",
          })
        }
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
