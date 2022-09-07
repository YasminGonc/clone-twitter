import React from "react";

import Button from "../Button";
import { Container, Topside, Logo, Menubutton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, Profiledata, ExitIcon } from './styles';

const MenuBar: React.FC = () => {
    return (
        <Container>
            <Topside>
                <Logo />

                <Menubutton>
                    <HomeIcon />
                    <span>Página inicial</span>
                </Menubutton>

                <Menubutton>
                    <BellIcon />
                    <span>Notificações</span>
                </Menubutton>

                <Menubutton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </Menubutton>

                <Menubutton>
                    <FavoriteIcon />
                    <span>Favoritos</span>
                </Menubutton>

                <Menubutton className='active'>
                    <ProfileIcon />
                    <span>Perfil</span>
                </Menubutton>

                <Button>
                    <span>Tweetar</span>
                </Button>

            </Topside>

            <Botside>
                <Avatar />

                <Profiledata>
                    <strong>Yasmin Gonçalves</strong>
                    <span>@yasmingonc</span>
                </Profiledata>

                <ExitIcon />
            </Botside>

        </Container>
    )
}

export default MenuBar;