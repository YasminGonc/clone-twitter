import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Yasmin Gonçalves</h1>
                <h2>@yasmingonc</h2>

                <p>
                    Developer at <a href='https;//rocketseat.com.br'>@Rocketseat</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 04 de setembro de 1997 
                    </li>

                    <Followage>
                        <span>
                            seguindo <strong>94</strong>
                        </span>
                        <span>
                            <strong>672</strong> seguidores
                        </span>
                    </Followage>
                </ul>
            </ProfileData>

            <Feed />
        </Container>
    )

}

export default ProfilePage;