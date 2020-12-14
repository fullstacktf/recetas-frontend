import styled from '@emotion/styled';
import { FC } from 'react';
import { formatStatistic } from '../../../utils/statisticFormater';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: Poppins;
  font-size: 1em;
  color: black;
`;

const Number = styled.p`
  font-weight: bold;
  width: 30%;
  text-align: right;
`;

const Description = styled.p`
  margin-left: 15px;
  width: 70%;
  text-align: left;
`;

export interface StatisticProps{
  number: number;
  description: string;
}

export const Statistic: FC<StatisticProps> = (props) => {
  return <Container>
            <Number>{formatStatistic(props.number)}</Number>
            <Description>{props.description}</Description>
          </Container>;
};
