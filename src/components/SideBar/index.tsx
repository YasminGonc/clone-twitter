import React from "react";
import StickyBox from 'react-sticky-box';

import List from "../List";
import FollowSugestion from "../FollowSugestion";
import News from "../News";

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={[
                            <FollowSugestion
                                name="Luiz Batanero"
                                nickname="@luizbatanero"
                            />,
                            <FollowSugestion
                                name="Luke Morales"
                                nickname="@lukemorales"
                            />,
                            <FollowSugestion
                                name="Camila Magalhães"
                                nickname="@camilaamgl"
                            />
                        ]}
                    />
                    <List
                        title="Talvez você curta"
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>  
    )
}

export default SideBar;