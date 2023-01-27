import styled from "styled-components";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";

function App() {

    const [isOpen, setIsOpen] = useState(true);
    const onClose = () => {
        setIsOpen(false);
    }
    const onOpen = () => {
        setIsOpen(true);
    }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} />
      <Title>POMODORO</Title>
      <Tags />
      <Timer/>
      <CogIcon onClick={onOpen}>
        <FaCog />
        Set timer
      </CogIcon>
    </>
  )
}

export default App


const Title = styled.h1`
  color:${props => props.theme.colors.secondary};
  font-size:5rem;
  padding: 2rem 0;
  text-align:center;
  letter-spacing:1rem;
`;
const CogIcon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;
  font-size:2rem;
  width:170px;
  margin:0 auto;
  padding:0.5rem;
  border-radius:5px;
  text-transform:uppercase;
  border:1px solid transparent;
  background-color:${props => props.theme.colors.primary};
  color:${props => props.theme.colors.bg};
  cursor:pointer;
  font-weight:600;
  letter-spacing:0.2rem;
  &:hover{
    background-color:transparent;
    color:${props => props.theme.colors.primary};
    border:1px solid ${props => props.theme.colors.primary};
    transition:all 0.2s ease-in-out;
  }
`;