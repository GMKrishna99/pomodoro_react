
import styled from "styled-components";
import Progress from "./porgress/Progress";

const Timer = () => {
  return (
    <TimerContainer>
        <Progress/>
    </TimerContainer>
  )
}

export default Timer

const TimerContainer = styled.div`
    background-color:${props => props.theme.colors.bg};
    width:50rem;
    height:35rem;
    margin: 3rem auto;
    border-radius:1rem;
    display:grid;
    place-items:center;
`;