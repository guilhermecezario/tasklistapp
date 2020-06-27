import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addList: ['title'],
  removeList: ['id']
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), title: action.title }
];

const remove = (state = INITIAL_STATE, action) =>
  state.filter(list => list.id !== action.id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_LIST]: add,
  [Types.REMOVE_LIST]: remove
});
