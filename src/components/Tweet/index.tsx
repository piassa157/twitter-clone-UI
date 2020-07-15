import React from 'react';

import { Container, 
    Retweeted, 
    RetweetIcon, 
    RtIcon,
    Body, 
    Avatar, 
    Content, 
    Header, 
    Dot, 
    Description, 
    ImageContent, 
    Icons, 
    Status, 
    CommentIcon, 
    LikeIcon,} from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RetweetIcon />
              Você Retweetou
          </Retweeted>

          <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong>GabrielPiassa</strong>
                    <span>@Piassa</span>
                    <Dot />
                    <time>14 de Jul</time>
                </Header>

                <Description>Foguete não tem ré 🚀 </Description>

                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        1337
                    </Status>
                    <Status>
                        <RtIcon />
                        777
                    </Status>
                    <Status>
                        <LikeIcon />
                        +8000
                    </Status>
                </Icons>
            </Content>                
          </Body>
      </Container>
  );
}

export default Tweet;