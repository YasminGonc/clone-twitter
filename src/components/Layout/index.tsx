import React from 'react';

import Main from '../Main/index';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
    return (
        <Container /* Página toda */ > 
            <Wrapper /* O que envolve os elementos*/>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    )
}

export default Layout;