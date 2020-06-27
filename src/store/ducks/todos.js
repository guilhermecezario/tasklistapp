import {createActions, createReducer} from 'reduxsauce';

export const {Types, Creators} = createActions({
  addTodo: ['text', 'id_list'],
  removeTodo: ['id'],
  completedTodo: ['id']
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, id_list: action.id_list, completed: false }
];

const remove = (state = INITIAL_STATE, action) => 
  state.filter(todo => todo.id !== action.id);

const completed = (state = INITIAL_STATE, action) => {
  return state.map((todo) => {
    if(todo.id === action.id) {
      todo.completed = true;
    }
  });
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.REMOVE_TODO]: remove,
  [Types.COMPLETED_TODO]: completed
});
