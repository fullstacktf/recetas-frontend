import styled from '@emotion/styled';
import { FC, useState } from 'react';

const Container = styled.div<any>`
  width: ${(props) => props.size ? props.size + ';' : '24px;'};
  height: ${(props) => props.size ? props.size + ';' : '24px;'};
  //min-width: 24px;
  //height: 2em;
  //min-height: 24px;
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  :hover{
    cursor: pointer;
  }
`;

interface IconProps {
  src: string;
  active_src?: string;
  onClick?: () => any;
  size?: string;
}

export const Icon: FC<IconProps> = (props) => {
  const [image, setImage] = useState(props.src);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (props.active_src){
      if(active) {
        setImage(props.active_src);
      }else{
        setImage(props.src);
      }
      setActive(!active);
    }
    props.onClick?.();
  };

  return <Container src={image} onClick={handleClick} size={props.size}/>;
};
