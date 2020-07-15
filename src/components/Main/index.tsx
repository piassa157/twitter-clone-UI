import React from 'react';

import Profilepage from '../Profilepage';

 import { Container, 
    Header, 
    BackIcon, 
    ProfileInfo, 
    BottomMenu, 
    HomeIcon, 
    SearchIcon, 
    BellIcon, 
    EmailIcon } from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon />
              </button>
              <ProfileInfo>
                  <strong> Gabriel G Piassa </strong>
                  <span> 1337 Tweets</span>
              </ProfileInfo>
              
          </Header>

        <Profilepage />

          <BottomMenu>

                  <HomeIcon />
                  <SearchIcon />
                  <BellIcon />
                  <EmailIcon />

              </BottomMenu>
      </Container>
  );
}

export default Main;