import React from 'react';

import {storiesOf} from '@storybook/react';
import { Provider } from 'react-redux';
// import {action} from '@storybook/addon-actions';
import createStore from '../redux/store';
import Boards from '../components/equipments/Boards';

const store = createStore({
  data:
    {
      boards:[
      ]
    }
});


storiesOf('Story of Boards', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('with text', () => <Boards />);
