import React from "react"

const Pizza = ({id, topping, size, vegetarian, populatePizzaForm }) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={ () => populatePizzaForm(id, topping, size, vegetarian)}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
