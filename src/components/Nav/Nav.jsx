// components
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return ( 
    <header>
    <nav>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/portfolio'>PORTFOLIO</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/contact'>CONTACT ME</NavLink>
    </nav>
    </header>
  )
}

export default Nav