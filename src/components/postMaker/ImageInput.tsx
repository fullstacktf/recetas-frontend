import styled from '@emotion/styled';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PhotoIcon from './assets/add_a_photo-24px.svg';
import { ImagePreview } from './ImagePreview';

const HEIGHT = 384;
const WIDTH = 902;

const getBorderColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  return '#eeeeee';
};

const Container = styled.div`
  margin-top: 10px;
  height: ${HEIGHT}px;
  width: ${WIDTH}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  outline: none;
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
  border-color: ${(props) => getBorderColor(props)};
  transition: border 0.24s ease-in-out;

  background-image: url(${PhotoIcon});
  background-size: 10%;
  background-position: 50% 15%;
  background-repeat: no-repeat;

  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #bdbdbd;
`;

interface ImageInputProps {
  setImage: (image: any) => void;
}

export const ImageInput: FC<ImageInputProps> = (props) => {
  const [images, setImage] = useState<any[]>([]);
  const [isImgLoad, setIsImgLoad] = useState(false);

  const onDrop = useCallback((acceptedImages) => {
    if (acceptedImages.length) {
      setImage(
        acceptedImages.map((image: any) => {
          props.setImage(image);
          return Object.assign(image, {
            preview: URL.createObjectURL(image)
          });
        })
      );
      setIsImgLoad(true);
    }
  }, [props]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    onDrop
  });

  useEffect(
    () => () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    },
    [images]
  );

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} aria-label="dropzone"/>
      {isImgLoad ? (
        <ImagePreview images={images} maxHeight={HEIGHT * 0.9} maxWidth={WIDTH * 0.9}/>
      ) : (
        <Text>
          {isDragActive ? (
            <p>Suelta tu imagen aquí ...</p>
          ) : (
            <p>Pulsa para añadir contenido multimedia</p>
          )}
        </Text>
      )}
    </Container>
  );
};
