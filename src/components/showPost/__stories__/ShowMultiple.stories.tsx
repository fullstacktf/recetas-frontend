import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ShowMultiple, ShowMultipleProps } from '../ShowMultiple';
import '../../../css/fonts.css';

export default {
  title: 'ShowMultiple',
  component: ShowMultiple
} as Meta;

const Template: Story<ShowMultipleProps> = (args) => <ShowMultiple {...args}/>;

const ingredients = [
  `Estos espaguetis a la carbonara con nata parten de la tradicional receta italiana de espaguetis a la carbonara, pero añadiéndole nata y cebolla pochada.
Se trata de una versión muy popular fuera de las fronteras italianas, que le aporta un extra de cremosidad, y aunque no se trate de la auténtica receta,
lo cierto es que queda deliciosa, ya que uno de los mejores aliados de la pasta sin duda es la nata.`,
  'otro ingrediente',
  'ultimoIngrediente'
];

const steps = [
  'hacer eso',
  'hacer esto',
  'por ultimo esto'
];

const tags = ['cosa', 'cosa2'];

export const Ingredients = Template.bind({});
Ingredients.args = {
  infoToShow: ingredients,
  maxWidth: 862,
  maxHeight: 384,
  numeric: false
};

export const Steps = Template.bind({});
Steps.args = {
  infoToShow: steps,
  maxWidth: 862,
  maxHeight: 384,
  numeric: true
};

export const Tags = Template.bind({});
Tags.args = {
  infoToShow: tags,
  maxWidth: 862,
  maxHeight: 384,
  numeric: true
};
