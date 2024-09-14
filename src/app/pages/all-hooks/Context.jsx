import { createContext, useContext, useState } from "react";

// export const AppContext = createContext();

export const AppContext = createContext();
export const useAppContext = useContext(AppContext);
const Context = ({ children }) => {
  const { counter, setCounter } = useState(1);
  return (
    <AppContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// const Context = ({ children }) => {
//   const [userDetails, setUserDetails] = useState({ name: "Niraj" });

//   return (
//     <AppContext.Provider
//       value={{
//         userDetails,
//         setUserDetails,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

console.log(a);
export default Context;
