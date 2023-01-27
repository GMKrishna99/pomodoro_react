import React, { useContext } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import {Formik, Form , Field} from 'formik'
import { StateContext } from '../StateProvider';

const Container = ({isOpen, onClose}) => {
    const {workTime,setWorkTime,shortBreak, setShortBreak,longBreak, setLongBreak} = useContext(StateContext);
  return (
   <ContainerModel >
        <Content initial={{y: "-100vh", scale:0}} animate={{y: 0 , scale:1}} exit={{y:"-100vh" , scale:0}}>
            <Header>
                <Title>Set Timer</Title>
                <CloseButton onClick={onClose} >
                    <FaWindowClose fontSize="2.5rem" />
                </CloseButton>
            </Header>
            <Body>
                <Formik initialValues={{work:workTime / 60,short:shortBreak /60,long:longBreak /60}} onSubmit={(values) => {
                    setWorkTime(values.work * 60);
                    setShortBreak(values.short * 60);
                    setLongBreak(values.long * 60);
                    onClose();
                }}>
                    <Form>
                        <InputWrapper>
                            <FormControl>
                                <label htmlFor='work'>Work</label>
                                <Field name="work" min="1" max="60"/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor='short'>Short Break</label>
                                <Field name="short" min="1" max="60"/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor='long'>Long Break</label>
                                <Field name="long" min="1" max="60"/>
                            </FormControl>
                        </InputWrapper>
                        <ButtonWrapper>
                            <ApplyButton type="submit">Apply</ApplyButton>
                        </ButtonWrapper>
                    </Form>
                </Formik>
            </Body>
        </Content>
   </ContainerModel> 
  )
}

export default Container
const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
`;
const ApplyButton = styled.button`
    all:unset;
    padding:1rem 2rem;
    font-size:1.5rem;
    background-color:${props => props.theme.colors.primary};
    color:${props => props.theme.colors.bg};
    outline:none;
    border:2px solid transparent;
    font-weight:600;
    border-radius:0.5rem;
    cursor:pointer;
    &:hover{
        background-color:${props => props.theme.colors.bg};
        color:${props => props.theme.colors.primary};
        border:2px solid ${props => props.theme.colors.primary};
    }
`;
const InputWrapper = styled.div`
    display:flex;
    padding:2rem;
    color:${props => props.theme.colors.primary};
    gap:2rem;
    font-weight:600;
    justify-content:space-evenly;
    
`;
const FormControl = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    label{
        font-size:1.7rem;
    }
    input{
        padding:1rem;
        background-color:${props => props.theme.colors.bg};
        border:1px solid ${props => props.theme.colors.primary};
        border-radius:0.5rem;
        outline:none;
        color:${props => props.theme.colors.primary};
        width:100%;
        font-size:1.5rem;
    }
`;

const ContainerModel = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    display:grid;
    place-items:center;
    z-index:100;
    @media (max-width: 600px) {
        width:100%;
        margin:1rem;
    }
`;
const Content = styled(motion.div)`
    width:50rem;
    height:30rem;
    background-color:${props => props.theme.colors.bg};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius:5px;
`;
const Header = styled.div`
    color:${props => props.theme.colors.primary};
    padding:2rem;
    display:flex;
    justify-content:space-between;
    border-bottom:2px solid ${props => props.theme.colors.primary};
`;
const Title = styled.h3`
    font-size:2.5rem;
`;
const CloseButton = styled.button`
    all:unset;
    cursor:pointer;

`;
const Body = styled.div``;

