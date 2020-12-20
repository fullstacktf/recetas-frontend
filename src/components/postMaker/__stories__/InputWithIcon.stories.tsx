import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import TimeImage from '../assets/query_builder-24px.svg';
import PeopleImage from '../assets/people-24px.svg';

import { InputWithIcon, InputWithIconProps } from '../InputWithIcon';
import '../../../css/fonts.css';

export default {
  title: 'InputWithIcon',
  component: InputWithIcon
} as Meta;

const Template: Story<InputWithIconProps> = (args) => <InputWithIcon {...args}/>;

export const Time = Template.bind({});
Time.args = {
  image: TimeImage,
  placeHolder: 'Tiempo de preparación...',
  setValue: (value: string) => {return;},
  checkInput: (value: string) => { return {isValid: true, msg: 'error' };}
};


export const Servings = Template.bind({});
Servings.args = {
  image: PeopleImage,
  placeHolder: 'Raciones...',
  setValue: (value: string) => {return;},
  checkInput: (value: string) => { return {isValid: true, msg: 'error' };}
};
