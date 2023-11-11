// components
import { NavLink } from 'react-router-dom'

// css
import '../Nav/Nav.css'

const Nav = () => {
  return ( 
    <header className='sticky fade-in'>
    <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/projects'>PROJECTS</NavLink>
      {/* <NavLink to='/about'>ABOUT</NavLink> */}
      <NavLink to='/contact'>CONTACT ME</NavLink>
    </nav>
    </header>
  )
}

export default Nav