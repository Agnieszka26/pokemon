import {createContext, useState} from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {
  const [detail, setDetail] = useState([]);
  // const [numberOfPokemonsToFetch, setNumberOfPokemonsToFetch] = useState(null);

  return (
    <CardContext.Provider
      value={{
        detail,
        setDetail,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
