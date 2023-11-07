// components
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

// components
import Nav from './components/Nav/Nav'

// css
import './App.css'

function App() {
  
  return (
    <>
    <Nav></Nav>
    <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </main>
    </>
  )
}

export default App
