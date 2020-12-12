import styled from '@emotion/styled';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PhotoIcon from './assets/add_a_photo-24px.svg';

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

const ThumbsContainer = styled.aside``;

const ImgWrap = styled.div``;

const Img = styled.img`
  height: auto;
  width: auto;
  max-height: ${HEIGHT * 0.9}px;
  max-width: ${WIDTH * 0.9}px;
`;

const Container = styled.div`
  margin: auto;
  margin-top: 10px;
  height: 384px;
  width: 902px;
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

  background-color: #fafafa;
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

export const ImageInput: FC = () => {
  const [image, setImage] = useState<any[]>([]);
  const [isImgLoad, setIsImgLoad] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      setImage(
        acceptedFiles.map((file: any) => {
          return Object.assign(file, {
            preview: URL.createObjectURL(file)
          });
        })
      );
      setIsImgLoad(true);
    }
  }, []);
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
      image.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [image]
  );

  const thumbs = image.map((file) => (
    <ImgWrap key={file.name}>
      <Img src={file.preview} alt=""/>
    </ImgWrap>
  ));

  return (
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} aria-label="dropzone"/>
      {isImgLoad ? (
        <ThumbsContainer>{thumbs}</ThumbsContainer>
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
