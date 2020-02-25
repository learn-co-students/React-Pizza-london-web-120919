import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  render() {
    const renderPizzas = () => {
      return this.props.pizzas.map(pizza => < Pizza id={pizza.id} topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} populatePizzaForm={this.props.populatePizzaForm}/>)
    }


    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            renderPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
