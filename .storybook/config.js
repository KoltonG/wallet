/**
 * Imports
 */
// Libraries
import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// Knobs
import { withKnobs } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

/**
 * Decorators
 */
addDecorator(renderStory => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    {renderStory()}
  </div>
));

addDecorator(
  withKnobs()
);

addDecorator(withDesign)

/**
 * Run
 */
function loadStories() {
  const req = require.context('./stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
