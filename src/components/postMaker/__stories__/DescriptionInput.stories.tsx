import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DescriptionInput, DescriptionInputProps } from '../DescriptionInput';
import '../../../css/fonts.css';

export default {
  title: 'DescriptionInput',
  component: DescriptionInput
} as Meta;

const Template: Story<DescriptionInputProps> = (args) => <DescriptionInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  setDescription: (value: string) => { return;},
  width: 862
};
