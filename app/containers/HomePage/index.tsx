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

import bind from 'bind-decorator';
import Card from 'components/Card';
import TopBar from 'components/TopBar';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { CardModel } from 'types/CardModel';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { resetGame } from './actions';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { makeSelectCardList } from './selectors';

interface HomePagePropsFromState {
  cardList: CardModel[];
}

interface HomePagePropsFromDispatch {
  reset: () => any;
}

type HomePageProps = HomePagePropsFromState & HomePagePropsFromDispatch;

interface HomePageState {
  clickCount: number;
  timeStamp: number;
}

const CardListWrapper = styled.div`
  display: flex;
  padding: 30px;
`;

class HomePage extends React.Component<HomePageProps> {
  readonly state: Readonly<HomePageState> = {
    clickCount: 0,
    timeStamp: 0,
  };

  componentDidMount(): void {
    this.props.reset();
  }

  @bind
  private handleRestart() {
    // TODO 카드 다시 섞고 시간 초기화 하는 액션 호출
  }

  public render() {
    const {
      clickCount,
      timeStamp,
    } = this.state;

    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <TopBar
          clickCount={clickCount}
          time={timeStamp}
          onClickStart={this.handleRestart}
        />
        <CardListWrapper>
          <Card>
            A
          </Card>
        </CardListWrapper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch): HomePagePropsFromDispatch {
  return {
    reset: () => dispatch(resetGame()),
  };
}

const mapStateToProps = createStructuredSelector<any, HomePagePropsFromState>(
  {
    cardList: makeSelectCardList(),
  },
);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ reducer, key: 'home' });
const withSaga = injectSaga({ saga, key: 'home' });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
