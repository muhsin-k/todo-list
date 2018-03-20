import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router';
import Popup from './Popup';
import ListItem from '../list-item/ListItem';

storiesOf('Popup', module)
  .addDecorator(StoryRouter())
  .add('with Link', () => (
    <div>
      <button className="button" id="button1">
        Popup
      </button>
      <Popup target="button1" cuePos="pos1">
        <ListItem name="dashboard" link="/dashboard" icon="dashboard" />
        <ListItem
          name="logout"
          onClick={action('logging out')}
          icon="sign-out"
        />
      </Popup>
    </div>
  ));
