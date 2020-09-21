import { createStore  } from 'redux';
import rootReduser from './redusers'
 


const store = createStore(rootReduser , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
 


export default store