import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TitleInput, TitleInputProps } from '../TitleInput';
import '../../../css/fonts.css';

export default {
  title: 'TitleInput',
  component: TitleInput
} as Meta;

const Template: Story<TitleInputProps> = (args) => <TitleInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  setTitle: (title: string) => {return;}
};
