import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ShowImage, ShowImageProps } from '../ShowImage';
import '../../../css/fonts.css';

export default {
  title: 'ShowImage',
  component: ShowImage
} as Meta;

const Template: Story<ShowImageProps> = (args) => <ShowImage {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  maxWidth: 862,
  maxHeight: 384,
  image: 'https://api.snapfork.me/static/mediaUtils/login/background.png'
};
