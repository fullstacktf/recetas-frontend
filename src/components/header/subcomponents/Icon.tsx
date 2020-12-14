import styled from '@emotion/styled';
import { FC } from 'react';

const Container = styled.div<any>`
  width: 2em;
  min-width: 24px;
  height: 2em;
  min-height: 24px;
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;


interface IconProps {
  src: string;
  alt: string;
}

export const Icon: FC<IconProps> = (props) => {
  return <Container src={props.src}/>;
};
