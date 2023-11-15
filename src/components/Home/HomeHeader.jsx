// imports
import { Link } from 'react-router-dom'

// images
import devBig from '../../assets/images/dev-big.svg'
import devSmall from '../../assets/images/dev-small.svg'

// css
import'./HomeHeader.css'

const HomeHeader = () => {
  return (  
    <div className='home-header'>
      <div className='left-container'>
        <h1>Hello! I'm</h1>
        <h1 id='name'>Brooklin Lee</h1>
        <p>Software Engineer</p>
        <Link to='/projects'>
          <button>View Projects</button>
        </Link>
      </div>
      <div className='right-container'>
        <img src={devBig} alt="Brooklin Lee" className='img-big'/>
        <img src={devSmall} alt="Brooklin Lee" className="small-img" />
      </div>
    </div>
  )
}

export default HomeHeader
