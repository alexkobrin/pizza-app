import {combineReducers} from 'redux'


import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rootReduser = combineReducers({
  filterReducer,
  pizzasReducer
}) 


export default  rootReduser