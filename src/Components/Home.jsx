import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
  return (
    <div>
      <h1>BRICK BY BRICK LOG</h1>
      <p>Build your journey, one brick at a time</p>
      <Link to='/brick-trade-brick'><button>BRICK <strong>TRADE</strong> BRICK</button></Link>
    </div>
  )
}

export default Home
