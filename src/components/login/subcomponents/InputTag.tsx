import React, { FC } from 'react';
import styled from '@emotion/styled';

const Text = styled.p`
  font-weight: 500;
  line-height: 36px;
  display: flex;
  align-items: center;
  margin: 0.5em;
`;

export const InputTag: FC = (props) => {
  return <Text>{props.children}</Text>;
};
