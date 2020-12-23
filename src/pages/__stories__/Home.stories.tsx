import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../css/fonts.css';

import { Home, HomeProps } from '../Home';

export default {
  title: 'Home',
  component: Home
} as Meta;
// <HomeProps>
const Template: Story<HomeProps> = (args) => <Home {...args}/>;

export const LoggedUser = Template.bind({});
LoggedUser.args = {
  isLogged: true
};

export const NotLoggedUser = Template.bind({});
NotLoggedUser.args = {
  isLogged: false
};
