import React, { FC } from 'react';
import styled from '@emotion/styled';
import { PostHeader } from './subcomponents/PostHeader';
import { PostFooter } from './subcomponents/PostFooter';
import { PostContent } from './subcomponents/PostContent';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

const HeaderContainer = styled.div`
  height: 10%;
  width: 100%;
`;

const ContentContainer = styled.div`
  height: 80%;
  width: 100%;
`;

const FooterContainer = styled.div`
  height: 10%;
  width: 100%;
`;

export interface TimelinePostProps {
  post: {
    _id: string,
    ingredients: string[],
    steps: string[],
    likes: number,
    comments: number,
    tags: string[],
    title: string,
    time: string;
    servings: number,
    description: string,
    owner: {
      id: string,
      username: string,
    }
  };
}

export const TimelinePost: FC<TimelinePostProps> = (props) => {
  return <Container>
            <HeaderContainer>
              <PostHeader phofilePhoto={'https://api.snapfork.me/static/profile/default.svg'} username={'PedroGT'}/>
            </HeaderContainer>
            <ContentContainer>
              <PostContent post={props.post}/>
            </ContentContainer>
            <FooterContainer><PostFooter likes={props.post.likes} comments={props.post.comments}/></FooterContainer>
          </Container>;
};
