import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      pizzas: [],
      currentPizza: {
        id: "",
        topping: "",
        size: "",
        vegetarian: ""}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(pizzas => this.setState({
        pizzas: pizzas
      }))
  }

  populatePizzaForm = (id, topping, size, vegetarian) => {
    if (this.state.currentPizza.id !== id) {
      this.setState({
        currentPizza: {
          id: id,
          topping: topping,
          size: size,
          vegetarian: vegetarian
        }
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          id={this.state.currentPizza.id}
          topping={this.state.currentPizza.topping}
          size={this.state.currentPizza.size}
          vegetarian={this.state.currentPizza.vegetarian} 
        />
        <PizzaList
          pizzas={this.state.pizzas}
          populatePizzaForm={this.populatePizzaForm} />
      </Fragment>
    );
  }
}

export default App;






