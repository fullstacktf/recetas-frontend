import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ShowPost, ShowPostProps } from '../ShowPost';
import '../../../css/fonts.css';

export default {
  title: 'ShowPost',
  component: ShowPost
} as Meta;

const Template: Story<ShowPostProps> = (args) => <ShowPost {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
};
