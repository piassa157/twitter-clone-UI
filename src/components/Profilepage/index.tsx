import React from 'react';

import { Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    Followage, 
    CakeIcon,
    EditButton } from './styles';

import Feed from '../Feed';

const Profilepage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Gabriel Piassa</h1>
              <h2>@Lindaum98</h2>

              <p>
                  Junior Development <a href="https://github.com/piassa157">@gitHub</a>
              </p>

              <ul>
                  <li>
                  <LocationIcon/>
                  Campinas, São Paulo, Brazil
                  </li>

                  <li>
                  <CakeIcon/>
                  Nascido(a) em 15 de Janeiro de 2001
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo<strong> 777</strong>
                  </span>
                  <span>
                      <strong>777 </strong>seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default Profilepage;