import React from 'react';
import { Route } from 'react-router-dom';
//import Button from './components/Button';
import { Header } from './components';
import { Home, Cart } from './pages';
import axios from 'axios';
import {connect} from 'react-redux'

import {setPizzas } from './redux/actions/pizzas';

// function App() {
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     }); 
//   }, []);

 
//  }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
     this.props.setPizzas(data.pizzas)
       
      })
     
  }
   render() {
     console.log(this.props)
      return (
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path="/" render={() => <Home items={this.props.items} />} />
    
            <Route exact path="/cart" component={Cart} />
          </div>
        </div>
      );
   } 
}
const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filter,
  }
}
 

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
