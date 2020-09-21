import React  from 'react';
import { Route } from 'react-router-dom';
//import Button from './components/Button';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import { useDispatch} from 'react-redux'

import {setPizzas } from './redux/actions/pizzas';


function App() {

  const dispatch = useDispatch();
 
 React.useEffect(()=> {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
     dispatch(setPizzas(data.pizzas))      
       })
  }, [])
  
   return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route exact path="/" component={Home}  />
      <Route exact path="/cart" component={Cart} />
    </div>
  </div>
   )
}
export default App 

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filter,
//   }
// }
 

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
   
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
