import React from 'react';
import { storiesOf } from '@storybook/react';

// import Button from '../../components/button/src'
import Button from '@koltong/wallet-button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
