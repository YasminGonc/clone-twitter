import React from 'react';

import Main from '../Main/index';
import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
    return (
        <Container /* Página toda */ > 
            <Wrapper /* O que envolve os elementos*/>
                {/* <MenuBar /> */}
                <Main />
                {/* <SideBar /> */}
            </Wrapper>
        </Container>
    )
}

export default Layout;