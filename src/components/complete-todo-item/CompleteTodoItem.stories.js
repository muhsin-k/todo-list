import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import CompleteTodoItem from './CompleteTodoItem';

storiesOf('CompleteTodoItem', module)
  .addDecorator(StoryRouter())
  .add('with Link', () => <CompleteTodoItem />);
