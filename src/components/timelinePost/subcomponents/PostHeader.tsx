import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: transparent;
  border-bottom: 1px solid #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px 25px 0px 0px;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;
   display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Poppins;
  font-size: 1.2em;
  font-weight: bolder;
  color: black;
`;

const Image = styled.div<any>`
  min-width: 60px;
  min-height: 60px;
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 100%;
  //border: 1px solid #e2e2e2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const Username = styled.span`
  width: fit-content;
  height: fit-content;
  padding-left: 25px;
`;

export interface PostHeaderProps {
  phofilePhoto: string;
  username: string;
}

export const PostHeader: FC<PostHeaderProps> = (props) => {
  return <Container>
          <Image src={props.phofilePhoto}/>
          <Username>{props.username}</Username>
        </Container>;
};
