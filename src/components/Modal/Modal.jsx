import React from 'react'
import styled from 'styled-components';
import Drop from './Drop';
import Container from './Container';
import {AnimatePresence} from 'framer-motion';

const Modal = ({isOpen , onClose}) => {
  return (
    <>
        <AnimatePresence>
        { isOpen &&
        (
            <>
                <Drop />
                <Container isOpen={isOpen} onClose={onClose} />
            </>
        )

        }
        </AnimatePresence>

    </>
  )
}

export default Modal