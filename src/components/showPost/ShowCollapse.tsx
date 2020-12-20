import styled from '@emotion/styled';
import React, { FC, useState } from 'react';
import { Collapse } from 'react-collapse';
import ArrowCollapse from './assets/arrow_up-24px.svg';

const getImageRotate = (isOpened: boolean): number => {
  return isOpened ? 0 : 180;
};

const getBorderRodius = (isOpened: boolean) => {
  return isOpened ? 0 : 25;
};

const Container = styled.div<any>`
  width: ${(props) => props.width}px;
  height: auto;
  min-height: 70px;
  border: 1px solid #ffffff;
  font-family: Poppins;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  background: #ffffff;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px 25px ${(props) => getBorderRodius(props.isOpened)}px
    ${(props) => getBorderRodius(props.isOpened)}px;
`;

const CollapseContainer = styled.div<any>`
  width: ${(props) => props.width}px;
  height: auto;
  min-height: 70px;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  background: #ffffff;
  box-shadow: 0px 1px 7px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 25px 25px;
`;

const SubContainer = styled.div<any>`
  width: ${(props) => props.width * 0.9}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  text-align: justify;
  color: #000000;
`;

const Image = styled.img<any>`
  width: 46px;
  height: 43px;
  transform: rotate(${(props) => getImageRotate(props.isOpened)}deg);
`;

export interface CollapseInputProps {
  title: string;
  width: number;
}

export const CollapseInput: FC<CollapseInputProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <Container onClick={handleClick} width={props.width} isOpened={isOpened}>
        <SubContainer width={props.width}>
          <Title>{props.title}</Title>
          <Image src={ArrowCollapse} alt="" isOpened={isOpened}/>
        </SubContainer>
      </Container>
      <Collapse isOpened={isOpened}>
        <CollapseContainer>
          {props.children}
        </CollapseContainer>
      </Collapse>
    </div>
  );
};
