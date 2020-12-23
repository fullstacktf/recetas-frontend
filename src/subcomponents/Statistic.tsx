import styled from '@emotion/styled';
import { FC } from 'react';
import { formatStatistic } from '../utils/statisticFormater';

const Container = styled.div<any>`
  width: fit-content;
  display: flex;
  flex-direction: ${(props) => props.icon ? 'row' : 'row-reverse'};
  align-items: center;
  font-family: Poppins;
  font-size: ${(props) => props.size ? props.size + ';' : '1em;'};
`;

const NumberWithIcon = styled.div<any>`
  width: fit-content;
  height: fit-content;
  text-align: left;
  font-weight: bold;
`;

const NumberWithOutIcon = styled.div<any>`
  width: fit-content;
  height: fit-content;
  text-align: right;
  font-weight: bold;
`;

const ContentWithIcon = styled.div<any>`
  width: fit-content;
  display: flex;
  justify-content: flex-end;
  padding-right: ${(props) => props.spaceBetween ? props.spaceBetween + ';' : '15px;'};
`;

const ContentWithOutIcon = styled.div<any>`
  width:fit-content;
  height:fit-content;
  display: flex;
  justify-content: flex-start;
  padding-left: ${(props) => props.spaceBetween ? props.spaceBetween + ';' : '15px;'};
`;

export interface StatisticProps {
  number: number;
  icon?: boolean;
  size?: string;
  spaceBetween?: string;
}

export const Statistic: FC<StatisticProps> = (props) => {
  return <Container icon={props.icon} size={props.size}>
    {props.icon
      ? <ContentWithIcon size={props.size} spaceBetween={props.spaceBetween}>{props.children}</ContentWithIcon>
      : <ContentWithOutIcon size={props.size} spaceBetween={props.spaceBetween}>{props.children}</ContentWithOutIcon>
    }
    {props.icon
      ? <NumberWithIcon>{formatStatistic(props.number)}</NumberWithIcon>
      : <NumberWithOutIcon>{formatStatistic(props.number)}</NumberWithOutIcon>
    }
  </Container>;
};
