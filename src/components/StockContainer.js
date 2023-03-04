import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddToPortfolio }) {
  // console.log(stocks)
  

  const stockMapping = stocks.map(stock => {
    return <Stock key={stock.id} stock={stock} onAddToPortfolio={onAddToPortfolio} />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockMapping}
    </div>
  );
}

export default StockContainer;
