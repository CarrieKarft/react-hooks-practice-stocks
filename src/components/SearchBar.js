import React from "react";

function SearchBar({  setPriceOrAlphabetical, stockType, setStockType }) {
 

  function alphabetChangeHandler() {
    setPriceOrAlphabetical(() => "Alphabetically")
  }

  function priceChangeHandler() {
    setPriceOrAlphabetical(() => "Price")
  }

  // function handleTypeChange(e) {
  //   console.log(e.target.value)
  //   setStockType(e.target.value)
  // }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={alphabetChangeHandler}
        />
        Alphabetically
      </label>
      <label>
        <input 
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={priceChangeHandler}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => setStockType(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
