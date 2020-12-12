import { FC } from 'react';

interface IconProps {
  src: string;
  alt: string;
}

export const Icon: FC<IconProps> = (props) => {
  return <img src={props.src} alt={props.alt}/>;
};
