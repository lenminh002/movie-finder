import Home from './pages/Home'
import NavBar from './components/NavBar'
import Favorites from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import './css/App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
