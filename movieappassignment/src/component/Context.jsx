import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {

  const [ApiData, SetApiData] = useState([]);
  const [search,setSearch]=useState('')
    

  return (
    <myContext.Provider value={{search,setSearch,ApiData, SetApiData }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;