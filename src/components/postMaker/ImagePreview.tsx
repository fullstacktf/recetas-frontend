import React, { FC } from 'react';
import styled from '@emotion/styled';

const Container = styled.aside``;

const ImgWrap = styled.div``;

const Img = styled.img`
  height: auto;
  width: auto;
  max-height: ${(props) => props.height}px;
  max-width: ${(props) => props.width}px;
`;

export interface ImagePreviewProps {
  images: any[];
  maxHeight: number;
  maxWidth: number;
}

export const ImagePreview: FC<ImagePreviewProps> = (props) => {
  const images = props.images.map((image) => (
    <ImgWrap key={image.name}>
      <Img
        src={image.preview}
        alt=""
        height={props.maxHeight}
        width={props.maxWidth}
      />
    </ImgWrap>
  ));
  return <Container>{images}</Container>;
};
