import React from 'react'
import styled from 'styled-components';

const Drop = () => {
  return (
    <BackDrop>

    </BackDrop>
  )
}

export default Drop
const BackDrop = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:100;
    background-color:#dbe2efd1;

`;