import AddCircle from './assets/add_circle_outline-24px.svg';
import Account from './assets/account_circle-24px.svg';
import Bookmark from './assets/bookmark-24px.svg';
import Chat from './assets/chat-24px.svg';
import Notifications from './assets/notifications-24px.svg';
import Home from './assets/home-24px.svg';
import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 33%;
`;

export const Icons: FC = () => {
  return (
    <IconGroup role="navigation">
      <Link to="/post">
        <Icon src={AddCircle} alt="AddCircle"/>
      </Link>
      <Link to="/home">
        <Icon src={Home} alt="Home"/>
      </Link>
      <Link to="/notifications">
        <Icon src={Notifications} alt="Notifications"/>
      </Link>
      <Link to="/chat">
        <Icon src={Chat} alt="Chat"/>
      </Link>
      <Link to="/bookmark">
        <Icon src={Bookmark} alt="Bookmark"/>
      </Link>
      <Link to="/account">
        <Icon src={Account} alt="Account"/>
      </Link>
    </IconGroup>
  );
};
