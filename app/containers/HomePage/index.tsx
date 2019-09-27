/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Card from 'components/Card';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Wrapper>
        <Card>
          A
        </Card>
      </Wrapper>
    </div>
  );
}
