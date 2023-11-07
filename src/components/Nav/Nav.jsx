// components
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return ( 
    <header>
    <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/projects'>PROJECTS</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/contact'>CONTACT ME</NavLink>
    </nav>
    </header>
  )
}

export default Nav