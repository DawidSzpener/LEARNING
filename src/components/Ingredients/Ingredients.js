import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList'

const Ingredients = () => {  
  const [userIngredients, setUserIngredients] = useState([])

  useEffect(() => {
    fetch('https://react-hooks-8d547-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = []
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          })
        }
        setUserIngredients(loadedIngredients)
      })
  }, [])

  const addIngredientHandler = (ingredient) => {
    fetch('https://react-hooks-8d547-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'aplication/json' }
    }).then(response => {
      return response.json();
    }).then(
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        { id: Math.random().toString(), ...ingredient }
      ])
    )
  }

  const removeIngredientHandler = (id) => {
    setUserIngredients(prevIngredients => [
      ...prevIngredients.filter(ig => 
        ig.id !== id)
    ])
  }

  const filteredIngredientsHandler = () => {
    setUserIngredients(filteredIngredients)
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search onLoadingIngredients = {filteredIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
