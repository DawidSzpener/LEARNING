import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props
  const [filteredName, setFilteredName] = useState('')

  useEffect(() => {
    const query = filteredName.length() === 0 ? '' : `?orderBy="title"&equalTo="${filteredName}"`
    fetch('https://react-hooks-8d547-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json' + query)
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
        // onLoadIngredients(loadedIngredients)
      })
    }, [filteredName, onLoadIngredients])
  

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" onChange={(event) => setFilteredName(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
