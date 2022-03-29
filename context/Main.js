import { createContext, useContext, useState } from "react";
import { View } from "react-native";
import Loading from "../screens/Loading";


const mainContext = createContext();

export const ContextProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({ username: "@Mike" })



  if(!loading) return <Loading />
  return (
    <mainContext.Provider value={{ user, loading }}>
      {children}
    </mainContext.Provider>
  )
}

export default function useMain () {
  const main = useContext(mainContext)
  return main;
}