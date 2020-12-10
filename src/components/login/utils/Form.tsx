import React, { FC } from 'react';
import styled from '@emotion/styled';

const SubForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface LoginFormProps {
  onSubmit: () => void;
}

export const Form: FC<LoginFormProps> = (props) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.onSubmit();
  };

  return <SubForm onSubmit={handleSubmit}>{props.children}</SubForm>;
};
