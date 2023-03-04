import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocksFilter, onAddToPortfolio }) {
 
// console.log(stocksFilter)

const mapFilteredStocks = stocksFilter.map(stock => {
    return <Stock key={stock.id} stock={stock} onAddToPortfolio={onAddToPortfolio} />
   })
  //  console.log(mapFilteredStocks)


  return (
    <div>
      <h2>My Portfolio</h2>
      {mapFilteredStocks}
    </div>
  );
}

export default PortfolioContainer;
