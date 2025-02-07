import { Link } from "react-router-dom";

function BrickTradeBrick() {
  return (
    <div>
      <h1>BRICK <strong>TRADE</strong> BRICK</h1>
      <p>Choose a tool</p>
      <Link to='/pnl-calculator'><button>P & L CALCULATOR</button></Link>
      <Link to='/leverage-calculator'><button>Leverage Calculator</button></Link>
      <Link to='/position-sizing-calculator'><button>Position Sizing</button></Link>
    </div>
  )
}

export default BrickTradeBrick
