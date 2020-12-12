import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropzone: FC = () => {
  const [image, setImage] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(
      acceptedFiles.map((file: any) => {
      console.log(file);
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      }
      )
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop
  });

  useEffect(
    () => () => {
      image.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [image]
  );

  const thumbs = image.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt=""/>
      </div>
    </div>
  ));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} aria-label="dropzone"/>
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <aside>{thumbs}</aside>
    </div>
  );
};
