import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PostMaker } from '../PostMaker';
import '../../../css/fonts.css';

export default {
  title: 'PostMaker',
  component: PostMaker
} as Meta;

const Template: Story = () => <PostMaker/>;

export const Primary = Template.bind({});
Primary.args = {};
