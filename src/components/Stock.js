import React from "react";

function Stock({ stock, onAddToPortfolio }) {
 
  function clickHandler(e) {
    // console.log(stock)
    onAddToPortfolio(stock)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={clickHandler}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
