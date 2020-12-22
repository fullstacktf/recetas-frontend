import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../css/fonts.css';

import { Profile, ProfileProps } from '../Profile';

export default {
  title: 'Profile',
  component: Profile
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args}/>;

export const Primary = Template.bind({});
  Primary.args = {
    userID: '5fe0cd67452a48155d94e341'
  };
