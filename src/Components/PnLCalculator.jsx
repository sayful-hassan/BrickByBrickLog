
import { Link } from "react-router-dom"
import { useState } from "react";
import './PnLCalculator.css'

function PandL(buyValue, sellValue) {
    this.buyValue = buyValue;
    this.sellValue = sellValue;
    this.profitAmount = function(){
        return sellValue - buyValue;
    };
    this.profitPercentage = function(){
        return ((sellValue-buyValue)/buyValue)*100;
    };
}

function PnLCalculator() {
    const [buyPrice, setBuyPrice] =useState('');
    const [sellPrice, setSellPrice] =useState('');
    const [result, setResult] =useState('');

    function calculatePnL(){
        const buy = parseFloat(buyPrice);
        const sell = parseFloat(sellPrice);

        if (isNaN(buy) || isNaN(sell)) {
            alert("Please enter a valid numbers.")
            return;
        }
        const trade = new PandL(buy, sell)

        setResult({
            profitAmount: trade.profitAmount().toFixed(2),
            profitPercentage: trade.profitPercentage().toFixed(2),
        })
    }
  return (
    <div>
      <h2>PnL Calculator</h2>
      <label>Buy Price:<input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} /></label>
      <br/>
      <label>Sell Price:<input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} /></label>
      <br/>
      <button onClick={calculatePnL}>Calculate</button>
      <br/>

      {result && (
        <h3>Profit/Loss : Rs{result.profitAmount}({result.profitPercentage}%)</h3>
      )}

      <Link to="/brick-trade-brick">
        <button>Back to Brick Trade Brick</button>
      </Link>
    </div>
  )
}

export default PnLCalculator
