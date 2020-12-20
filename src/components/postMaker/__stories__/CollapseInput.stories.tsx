import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CollapseInput, CollapseInputProps } from '../CollapseInput';
import '../../../css/fonts.css';
import { DescriptionInput } from '../DescriptionInput';

export default {
  title: 'CollapseInput',
  component: CollapseInput
} as Meta;

const Template: Story<CollapseInputProps> = (args) => (
  <CollapseInput {...args}>
    <DescriptionInput
      setDescription={(value: string) => {
        return;
      }}
      width={862}
    />
  </CollapseInput>
);

export const Description = Template.bind({});
Description.args = {
  title: 'Descripción',
  width: 862
};
