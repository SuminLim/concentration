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
import TopBar from 'components/TopBar';

const CardListWrapper = styled.div`
  display: flex;
  padding: 30px;
`;

class HomePage extends React.Component {
  private handleRestart() {
    // TODO 카드 다시 섞고 시간 초기화 하는 액션 호출
  }

  public render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <TopBar onClickStart={this.handleRestart}/>
        <CardListWrapper>
          <Card>
            A
          </Card>
        </CardListWrapper>
      </div>
    );
  }
}

export default HomePage;
