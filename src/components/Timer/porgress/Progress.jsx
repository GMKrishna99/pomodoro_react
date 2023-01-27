import styled from 'styled-components';
import Clock from './Clock/Clock';
import { StateContext } from '../../StateProvider';
import { useContext , useEffect} from 'react';

const Progress = () => {

  const {progress, setProgress,time,initTime} = useContext(StateContext);

  useEffect(() => {
    setProgress(time / (initTime / 100));
  },[setProgress,time])
  return (
    <OuterBar progress={progress}>
        <InnerBar>
          <Clock/>
        </InnerBar>
    </OuterBar>
  )
}

export default Progress

const OuterBar = styled.div`
    background-color:${props => props.theme.colors.primary};
    width:48rem;
    height:35rem;
    border-radius:5px;
    display:grid;
    place-items:center;
    background:conic-gradient(#3F72AF ${({progress}) => progress}%, transparent ${({progress}) => progress}%);
    box-shadow: rgba(100, 100, 111, 0.466) 0px 7px 29px 0px;
`;
const InnerBar = styled.div`
    background-color:${props => props.theme.colors.bg};
    width:47rem;
    height:34rem;
    border-radius:5px;
    display:grid;
    place-items:center;
`;