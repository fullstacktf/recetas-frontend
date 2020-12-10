import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icons } from '../Icons';
import '../../../css/fonts.css';

export default {
  title: 'Icons',
  component: Icons
} as Meta;

const Template: Story = () => <Icons/>;

export const Primary = Template.bind({});
Primary.args = {};
