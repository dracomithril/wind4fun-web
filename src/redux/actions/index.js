import { ADD_NEW_TRAINER } from './action_types';

export const createNewTrainer = trainer => ({ type: ADD_NEW_TRAINER, value: trainer });


export default { createNewTrainer };
