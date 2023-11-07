// pages
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

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
      </Routes>

    </main>
    </>
  )
}

export default App
