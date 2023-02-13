/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description stateful component that renders MarketCreator and MarketsDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
// import child components...
import MarketCreator from '../components/MarketCreator.jsx';
import MarketsDisplay from '../components/MarketsDisplay.jsx';

const mapStateToProps = state => ({
  // provide pertinent state here
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
});

class MarketsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <MarketCreator />
        <MarketsDisplay />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
