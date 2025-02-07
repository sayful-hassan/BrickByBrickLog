import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import BrickTradeBrick from './Components/BrickTradeBrick'
import PositionSizingCalculator from './Components/PositionSizingCalculator'
import LeverageCalculator from './Components/LeverageCalculator'
import PnLCalculator from './Components/PnLCalculator'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/brick-trade-brick' element={<BrickTradeBrick/>} />
        <Route path="/pnl-calculator" element={<PnLCalculator />} />
        <Route path="/leverage-calculator" element={<LeverageCalculator />} />
        <Route path="/position-sizing-calculator" element={<PositionSizingCalculator/>} />
      </Routes>
    </Router>
  )
}

export default App
