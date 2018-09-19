import { ADD_NEW_TRAINER, DELETE_TRAINER } from './action_types';

export const createNewTrainer = trainer => ({ type: ADD_NEW_TRAINER, value: trainer });
export const deleteTrainer = login => ({ type: DELETE_TRAINER, value: login });
