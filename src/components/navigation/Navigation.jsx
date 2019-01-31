import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import MenuBar from './MenuBar';
import navigationOptions from './navigationOptions';

const Navigation = () => (
  <React.Fragment>
    <Router>
      <div>
        <MenuBar />
        <Switch>
          {navigationOptions.map(({ name, path, component }) => (
            <Route
              key={name}
              exact={name === 'home'}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

export default Navigation;
