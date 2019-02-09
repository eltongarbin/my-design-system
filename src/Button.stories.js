import React from 'react';
import { storiesOf } from '@storybook/react';

import { wInfo } from './utils';
import { Button } from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with background',
    wInfo(`
      description of the component

      ~~~js
      <Button>Click here</Button>
      ~~~
      `)(() => <Button bg="palegoldenrod">Hello world</Button>)
  )
  .addWithJSX('with background 2', () => (
    <Button bg="green">Hello world</Button>
  ));
