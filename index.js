import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, bindActionCreators, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

const INCREASE_T = 'T';

let increaseReducer = (state={num: 0}, action) => {
  switch (action.type) {
    case INCREASE_T: return { num: state.num + 1 };
    default: return state;
  }
};
let reduce = combineReducers({ increaseReducer });
let store = createStore(reduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let increaseActionCreator = () => ({ type: INCREASE_T });
let mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { increaseActionCreator },
    dispatch)
}) ;

let mapStateToProps = state => ({ increaseReducer: state.increaseReducer });

class Counter extends Component{
  render(){
    return (
      <div>
        <span>{this.props.increaseReducer.num}</span>
        <button onClick={this.props.actions.increaseActionCreator}>Increase</button>
      </div>
    )
  }
}
Counter.propTypes = {
  increaseReducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
/* 
 * console.log('What needs to change in this module?'); 
 * console.log('What would be incoming?');
 * console.log('What would be affected?');
 * console.log('What would be return?');
 */