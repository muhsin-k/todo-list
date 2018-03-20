import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router';

import ListItem from './ListItem';

storiesOf('ListItem', module)
  .addDecorator(StoryRouter())
  .add('with Link', () => (
    <ListItem name="test" link="/dashboard" icon="dashboard" />
  ))
  .add('with onClick', () => (
    <ListItem name="test" onClick={action('clicked')} icon="dashboard" />
  ));
