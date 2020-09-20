import { createStore  } from 'redux';
import rootReduser from './redusers'
 


const store = createStore(rootReduser )
console.log(rootReduser)

window.store = store


export default store