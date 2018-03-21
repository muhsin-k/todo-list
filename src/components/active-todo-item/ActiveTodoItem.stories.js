import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';

import ActiveTodoItem from './ActiveTodoItem';

storiesOf('ActiveTodoItem', module)
  .addDecorator(StoryRouter())
  .add('with Link', () => <ActiveTodoItem />);
