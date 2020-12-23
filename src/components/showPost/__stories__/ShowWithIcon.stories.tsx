import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import TimeImage from '../assets/schedule-24px.svg';
import PeopleImage from '../assets/people-24px.svg';

import { ShowWithIcon, ShowWithIconProps } from '../ShowWithIcon';
import '../../../css/fonts.css';

export default {
  title: 'ShowWithIcon',
  component: ShowWithIcon
} as Meta;

const Template: Story<ShowWithIconProps> = (args) => <ShowWithIcon {...args}/>;

export const Time = Template.bind({});
Time.args = {
  image: TimeImage,
  info: '1h'
};


export const Servings = Template.bind({});
Servings.args = {
  image: PeopleImage,
  info: '2'
};
