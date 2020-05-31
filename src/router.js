import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import ExamplePage from './routes/ExamplePage';
import CounterPage from './routes/CounterPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CounterPage} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/example" exact component={ExamplePage} />
        <Route path="/counter" exact component={CounterPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
