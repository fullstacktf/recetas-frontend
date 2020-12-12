import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RegisterForm, RegisterFormProps } from '../RegisterForm';
import '../../../css/fonts.css';

export default {
  title: 'RegisterForm',
  component: RegisterForm
} as Meta;

const Template: Story<RegisterFormProps> = (args) => <RegisterForm {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: () => { }
};
