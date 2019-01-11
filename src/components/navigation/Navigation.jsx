import React from 'react';
import {
  Route,
  Switch,
  StaticRouter,
  BrowserRouter as Router,
} from 'react-router-dom';
import MenuBar from './MenuBar';
import navigationOptions from './navigationOptions';

const Navigation = () => (
  <div>
    <StaticRouter location="/storybook" />
    <StaticRouter location="/app/version" />
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
  </div>
);

export default Navigation;
