import {combineReducers} from 'redux'
import filter from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReduser = combineReducers({
  filter, 
  pizzas, 
  cart,
}) 


export default  rootReduser