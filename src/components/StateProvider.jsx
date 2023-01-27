import React,{createContext,useState,useEffect} from 'react';

export const StateContext = createContext();
const StateProvider = ({children}) => {

    const [workTime, setWorkTime] = useState(25 * 60);
    const [shortBreak, setShortBreak] = useState(5 * 60);
    const [longBreak, setLongBreak] = useState(30 * 60);

    const [initTime, setInitTime] = useState(0);

    const [activeTag, setActiveTag] = useState(0);
    const [progress, setProgress] = useState(20); 
    const [time, setTime] = useState(100);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      switch (activeTag) {
        case 0:
          setTime(workTime);
          setInitTime(workTime);
          break;
        case 1:
          setTime(shortBreak);
          setInitTime(shortBreak);
          break;
        case 2:
          setTime(longBreak);
          setInitTime(longBreak);
          break;
        default:
          break;
      }
    }, [activeTag, workTime, shortBreak, longBreak]);
    
  return (
<StateContext.Provider value={{activeTag, setActiveTag ,progress, setProgress ,time, setTime,isActive, setIsActive,initTime,setInitTime,workTime,setWorkTime,shortBreak, setShortBreak,longBreak, setLongBreak}}>{children}</StateContext.Provider>
  )
}

export default StateProvider