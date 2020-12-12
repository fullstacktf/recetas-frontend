import { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: transparent;
  font-family: Poppins;
  font-style: italic;
  font-weight: bold;
  font-size: ${(props: BrandProps) => props.fontSize || '24px'};
  line-height: 26px;
  color: #18a0fb;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: auto;

  :hover{
    cursor: pointer;
  }
`;

interface BrandProps {
  fontSize?: string;
  linkTo?: () => void;
}

export const Brand: FC <BrandProps> = (props) => {

  const handleClick = (event: any) => {

  };

  return <Container fontSize={props.fontSize} onClick={handleClick}>
    {props.children}
  </Container>;
};
