// components
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'

// pages
import Home from './pages/Home/Home'
import Project from './pages/Project/Project'
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
        <Route path='/projects' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
