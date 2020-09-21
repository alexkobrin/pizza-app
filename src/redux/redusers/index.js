import {combineReducers} from 'redux'
import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rootReduser = combineReducers({
  filter: filterReducer,
  pizzas: pizzasReducer,
}) 


export default  rootReduser