import styled from '@emotion/styled';
import { FC } from 'react';
import { formatStatistic } from '../utils/statisticFormater';

const Container = styled.div<any>`
  display: flex;
  flex-direction: ${(props) => props.icon ? 'row' : 'row-reverse'};
  align-items: center;
  font-family: Poppins;
  font-size: 1em;
  color: black;
`;

const NumberWithIcon = styled.div`
  font-weight: bold;
  width: 60%;
  text-align: left;
  font-size: 1.4em;
`;

const NumberWithOutIcon = styled.div`
  font-weight: bold;
  width: 40%;
  text-align: right;
`;

const ContentWithIcon = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`;

const ContentWithOutIcon = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-start;
  padding-left: 15px;
`;

export interface StatisticProps {
  number: number;
  icon?: boolean;
}

export const Statistic: FC<StatisticProps> = (props) => {
  return <Container icon={props.icon}>
    {props.icon
      ? <ContentWithIcon>{props.children}</ContentWithIcon>
      : <ContentWithOutIcon>{props.children}</ContentWithOutIcon>
    }
    {props.icon
      ? <NumberWithIcon>{formatStatistic(props.number)}</NumberWithIcon>
      : <NumberWithOutIcon>{formatStatistic(props.number)}</NumberWithOutIcon>
    }
  </Container>;
};
