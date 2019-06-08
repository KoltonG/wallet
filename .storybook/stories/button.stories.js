import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// Components
// import Button from '../../components/button/src'
import Button from '@koltong/wallet-button';

// Docs
import documentation from '../../components/button/README.md';

storiesOf('Button', module)
  .add('with text', () => {;
    return (
      <Button>{text('Content', 'Hello World', 'Test')}</Button>
    )
  }, {
    notes: {
      markdown: documentation
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Wm7W9SxH7ONpU31s9cyOzJuJ/App-Design?node-id=2%3A207'
    }
  });
