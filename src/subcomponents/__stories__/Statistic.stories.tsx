import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import '../../css/fonts.css';
import { Statistic, StatisticProps } from '../Statistic';
import { Icon } from '../Icon';
import Like from '../../components/postPreview/assets/favorite-24px.svg';
import NoLike from '../../components/postPreview/assets/favorite_border-24px.svg';


export default {
  title: 'Statistic',
  component: Statistic
} as Meta;

const Template: Story<StatisticProps & any> = (args) => <Statistic {...args}/>;

export const WithIcon = Template.bind({});
WithIcon.args = {
  number: 14,
  icon: true,
  children: [<Icon src={NoLike} active_src={Like} aria-label="Icon"/>]
};

export const WithText = Template.bind({});
WithText.args = {
  number: 14,
  children: [<span>publicaciones</span>]
};
