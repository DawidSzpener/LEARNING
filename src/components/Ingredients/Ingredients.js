import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList'

const Ingredients = () => {  
  const [userIngredients, setUserIngredients] = useState([])

  const addIngredientHandler = (ingredient) => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredient }
    ])
  }

  const removeIngredientHandler = (id) => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients.filter(ig => 
        ig.id !== id)
    ])
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
