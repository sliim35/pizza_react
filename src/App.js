import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './components/List';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/edit/:name" component={EditEmployee} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
