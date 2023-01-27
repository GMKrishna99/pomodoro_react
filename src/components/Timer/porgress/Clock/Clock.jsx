import styled from 'styled-components';
import { useEffect } from 'react';
import { useContext } from 'react';
import { StateContext } from '../../../StateProvider';

const Clock = () => {
    const {time, setTime,isActive,setIsActive,initTime} = useContext(StateContext);

    useEffect(() => {
        if(isActive && time > 0){
            const interval = setInterval(() => {
                setTime((time) => time - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    },[time , isActive])

    const toggleClock = () => {
        setIsActive(!isActive);
    };
    const resetClock = () => {
        setTime(initTime);
        setIsActive(false);
    }
    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min :min}: ${sec <10 ? "0" + sec : sec}`;
    };

  return (
    <ClockContainer>
        <Timer>{ getTime(time)}</Timer>
            <ButtonsContainer>
                <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start" }</StartPauseButton>
                <ResetButton onClick={resetClock}>Reset</ResetButton>
            </ButtonsContainer>
    </ClockContainer>
    
  )
}

export default Clock

const ClockContainer = styled.div`
    display:grid;
    place-items:center;
`;
const Timer = styled.h3`
    font-size:10rem;
    color:${props => props.theme.colors.primary};
`;
const   ButtonsContainer = styled.div`
    margin-top:3rem;    
`;
const StartPauseButton = styled.button`
    padding:5px;
    width:11rem;
    border-radius:0.5rem;
    border:1px solid transparent;
    background-color:#53BF9D;
    margin-top:1rem;
    text-align:center;
    font-size:2rem;
    text-transform:uppercase;
    letter-spacing:0.2rem;
    color:white;
    font-weight:600;
    &:hover{
        background-color:transparent;
        border:1px solid #53BF9D;
        color:#53BF9D;
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`;
const ResetButton = styled.button`
    padding:5px;
    width:11rem;
    border-radius:0.5rem;
    border:1px solid transparent;
    background-color:#F94C66;
    margin-top:1rem;
    margin-left:4rem;
    text-align:center;
    font-size:2rem;
    text-transform:uppercase;
    letter-spacing:0.2rem;
    color:white;
    font-weight:600;
    &:hover{
        background-color:transparent;
        border:1px solid #F94C66;
        color:#F94C66;
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

