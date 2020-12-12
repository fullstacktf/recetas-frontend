import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { LoginForm, LoginFormProps } from '../LoginForm';
import '../../../css/fonts.css';

export default {
  title: 'LoginForm',
  component: LoginForm
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: () => { }
};
