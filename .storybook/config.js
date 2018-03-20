import { configure } from '@storybook/react';
import '../src/styles/base.css';

const req = require.context('../src/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);