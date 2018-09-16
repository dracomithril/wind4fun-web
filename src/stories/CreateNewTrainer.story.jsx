import React from 'react';

import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';

import CreateNewTrainer from '../components/trainers/CreateNewTrainer';

storiesOf('Story of CreateNewTrainer', module)
    .add('with text', () => <CreateNewTrainer />);
