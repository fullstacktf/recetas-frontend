import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Statistic } from '../../../subcomponents/Statistic';
import { Icon } from '../../../subcomponents/Icon/Icon';

import Like from '../assets/favorite-24px.svg';
import NoLike from '../assets/favorite_border-24px.svg';
import Comment from '../assets/comment-24px.svg';
import Launch from '../assets/launch_24dp.svg';
import Share from '../assets/share_24dp.svg';
import Save from '../assets/bookmark-24px.svg';
import NoSave from '../assets/bookmark_border-24px.svg';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;
`;

const Left = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Right = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Separator = styled.div`
  height: 100%;
  width: 10%;
`;

export interface PostFooterProps {
  likes: number,
  comments: number
}

export const PostFooter: FC<PostFooterProps> = (props) => {
  return <Container>
    <Left>
      <Statistic icon number={props.likes} spaceBetween={'5px'}><Icon src={NoLike} active_src={Like}/></Statistic>
      <Separator/>
      <Statistic icon number={props.comments} spaceBetween={'5px'}><Icon src={Comment}/></Statistic>
      <Separator/>
      <Icon src={NoSave} active_src={Save}/>
    </Left>
    <Right>
      <Icon src={Launch} onClick={() => console.log('Click')}/>
      <Separator/>
      <Icon src={Share}/>
    </Right>
  </Container>;
};