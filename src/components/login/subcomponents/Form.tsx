import React, { FC } from 'react';
import styled from '@emotion/styled';

const SubForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormProps {
  onSubmit: (event: any) => void;
}

export const Form: FC<FormProps> = (props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.onSubmit(event);
  };

  return <SubForm onSubmit={handleSubmit}>{props.children}</SubForm>;
};
