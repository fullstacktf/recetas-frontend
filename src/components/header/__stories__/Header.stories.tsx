import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '../Header';
import '../../../css/fonts.css';

export default {
  title: 'Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args}/>;

export const LoggedUser = Template.bind({});
LoggedUser.args = {
  isLogged: true
};

export const NotLoggedUser = Template.bind({});
NotLoggedUser.args = {
  isLogged: false
};
