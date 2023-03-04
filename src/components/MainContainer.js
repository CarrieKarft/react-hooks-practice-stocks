import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [isInPortfolio, setIsInPortfolio] = useState(false)
  const [priceOrAlphabetical, setPriceOrAlphabetical] = useState(" ")
  const [stockType, setStockType] = useState("Tech")

  console.log(stockType)

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(stockData => setStocks(stockData))
  }, [])
  
  const sortedStocks = [...stocks]
  if (priceOrAlphabetical === "Alphabetically"){
    sortedStocks.sort((a,b) => {
      let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
      if (fa < fb) {
            return -1;
        }
      if (fa > fb) {
            return 1;
        }
        return 0;
    })
    // console.log("alphabetical", sortedStocks)
  } else if (priceOrAlphabetical === "Price") {
    sortedStocks.sort((a, b) => a.price - b.price)
    // console.log("price", sortedStocks)
  } 

  const sortedStocksTwo = sortedStocks.filter(stock => stock.type === stockType)

  function handleAddToPortfolio(stockAddition) {
    setIsInPortfolio(() => !isInPortfolio)
    fetch(`http://localhost:3001/stocks/${stockAddition.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inPortfolio: isInPortfolio,
      }),
    })
    .then(r => r.json())
    .then(updatedStock => {
       const stockMap = stocks.map(stock => {
        if (stock.id === updatedStock.id) {
          return updatedStock
        } else {
          return stock
        }
      })
      setStocks(() => stockMap)
    })
  }

  const stocksFilter = sortedStocks.filter(stock => stock.inPortfolio === true)
  

  return (
    <div>
      <SearchBar stockType={stockType} setStockType={setStockType} setPriceOrAlphabetical={setPriceOrAlphabetical}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocksTwo} onAddToPortfolio={handleAddToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocksFilter={stocksFilter} onAddToPortfolio={handleAddToPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
