import styled from '@emotion/styled';
import {css, SerializedStyles} from '@emotion/react';
import { FC } from 'react';
import { formatStatistic } from '../utils/statisticFormater';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Poppins;
  font-size: 1em;
  color: black;
`;

const Number = styled.div`
  font-weight: bold;
  width: 40%;

  // SIN ICONO
  // text-align: right;

  // CON ICONO
  // text-align: left;
  // font-size: 1.4em;
`;
const Content = styled.div`
  width: 60%;

  // SIN ICONO
  // text-align: left;
  // margin-left: 15px;

  // CON ICONO
  // display: flex;
  // justify-content: flex-end;
  // padding-right: 10px;
`;

export interface StatisticProps {
  number: number;
  icon?: boolean;
}

function getNumberCSS(icon: boolean = false): SerializedStyles {
  if(icon){
    return css`
              // display: flex;
              // justify-content: flex-end;
              text-align: left;
              padding-right: 10px;
              background: red;
            `;
  }else{
    return css`
              // display: flex;
              // justify-content: flex-start;
              text-align: right;
              background: blue;
            `;
  }
}

function getContentCSS(icon: boolean = false): SerializedStyles {
  if (icon) {
    return css`
              text-align: left;
              font-size: 1.4em;
              background: red;
              `;
  } else {
    return css`
              text-align: right;
              `;
  }
}

export const Statistic: FC<StatisticProps> = (props) => {
  return <Container>
    <Content css={getContentCSS(props.icon)}>{props.children}</Content>
    <Number css={getNumberCSS(props.icon)}>{formatStatistic(props.number)}</Number>
  </Container>;
};
