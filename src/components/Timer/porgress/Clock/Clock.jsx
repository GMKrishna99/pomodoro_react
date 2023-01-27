import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(100);
    const [isActive, setIsActive] = useState(false);

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

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min :min}: ${sec <10 ? "0" + sec : sec}`;
    };

  return (
    <CloclContainer>
        <Timer>{ getTime(time)}</Timer>
        <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start" }</StartPauseButton>
    </CloclContainer>
    
  )
}

export default Clock

const CloclContainer = styled.div`
    display:grid;
    place-items:center;
`;
const Timer = styled.h3`
    font-size:10rem;
    color:${props => props.theme.colors.primary};
`;
const StartPauseButton = styled.button`
    all:unset;
    margin-top:1rem;
    text-align:center;
    font-size:2rem;
    text-transform:uppercase;
    letter-spacing:0.7rem;
`;