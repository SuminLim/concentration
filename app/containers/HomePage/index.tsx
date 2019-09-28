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

import Card from 'components/Card';
import TopBar from 'components/TopBar';
import React, { useReducer, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';
import homeReducer, { initialState } from './reducer';

interface HomePagePropsFromState {

}

interface HomePagePropsFromDispatch {

}

type HomePageProps = HomePagePropsFromState & HomePagePropsFromDispatch;

const CardListWrapper = styled.div`
  display: flex;
  padding: 30px;
`;

const HomePage: React.FC<HomePageProps> = ({  }) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [state, dispatch] = useReducer(homeReducer, initialState);

  function handleRestart() {
    setClickCount(0);
  }

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TopBar
        clickCount={clickCount}
        time={0}
        onClickStart={handleRestart}
      />
      <CardListWrapper>
        <Card>
          A
        </Card>
      </CardListWrapper>
    </div>
  );
};

export default HomePage;
