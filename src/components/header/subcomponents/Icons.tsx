import AddCircle from '../assets/add_circle_outline-24px.svg';
import Account from '../assets/account_circle-24px.svg';
import Bookmark from '../assets/bookmark-24px.svg';
import Chat from '../assets/chat-24px.svg';
import Notifications from '../assets/notifications-24px.svg';
import Home from '../assets/home-24px.svg';
import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Link } from 'react-router-dom';
import { Icon } from '../../../subcomponents/Icon/Icon';

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 500px;
`;

export const Icons: FC = () => {
  return (
      <IconGroup role="navigation">
        <Link role="button" to="/postMaker">
          <Icon src={AddCircle}/>
        </Link>
        <Link role="button" to="/home">
          <Icon src={Home}/>
        </Link>
        <Link role="button" to="/notifications">
          <Icon src={Notifications}/>
        </Link>
        <Link role="button" to="/chat">
          <Icon src={Chat}/>
        </Link>
        <Link role="button" to="/bookmark">
          <Icon src={Bookmark}/>
        </Link>
        <Link role="button" to="/account">
          <Icon src={Account}/>
        </Link>
      </IconGroup>
  );
};
