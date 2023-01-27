import React,{createContext,useState} from 'react'

export const StateContext = createContext();
const StateProvider = (children) => {
    const [activeTag, setActiveTag] = useState(0);
  return (
<StateContext.Provider value={{activeTag , setActiveTag}}></StateContext.Provider>
  )
}

export default StateProvider