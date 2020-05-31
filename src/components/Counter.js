import React from 'react';
import { connect } from 'dva';

const Counter = (props) => {
  return (
    <div>
      <h1>CounterObj</h1>
      <h2>{ props.countObj.count }</h2>
      <button onClick={() => { props.dispatch({type: 'countObj/add'})}}>+</button>
      <button onClick={() => { props.dispatch({type: 'countObj/minus'})}}>-</button>

      <h1>CounterInt</h1>
      <h2>{ props.countInt }</h2>
      <button onClick={() => { props.dispatch({type: 'countInt/add'})}}>+</button>
      <button onClick={() => { props.dispatch({type: 'countInt/minus'})}}>-</button>
    </div>
  );
};

export default connect(({ countObj, countInt }) => ({
  countObj, countInt
}))(Counter);
