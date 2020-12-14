import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../../css/fonts.css';
import { Statistic, StatisticProps } from '../subcomponents/ Statistic';


export default {
  title: 'Statistic',
  component: Statistic
} as Meta;

const Template: Story<StatisticProps> = (args) => <Statistic {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  number: 14,
  description: 'publicaciones'
};

