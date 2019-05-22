import React, { Fragment } from 'react';
import Title from '../../src/components/atoms/Title';
import Text from '../../src/components/atoms/Text';

export default () => (
  <Fragment>
    <Title as="h1" mb="xxl">
      Core values
    </Title>
    <Text maxWidth="700px">
      Pulse Boilerplate is a react based advanced tool, which can help you build
      your own design system. You can very easily document your code, create
      your style guides, live components and other things.
    </Text>
  </Fragment>
);
