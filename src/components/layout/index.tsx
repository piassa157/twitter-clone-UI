import React from 'react'

import Main from '../Main' 

import { Container, Wrapper } from './styles'
import MenuBar from '../MenuBar';
import Sidebar from '../Sidebar';

export default function index() {
    return (
        <Container>
            <Wrapper>
                <MenuBar/>
                <Main/>
                <Sidebar/>
            </Wrapper>
        </Container>
    )
}
