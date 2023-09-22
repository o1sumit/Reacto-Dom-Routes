
import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './assets/Components/Home'
import Contact from './assets/Components/Contact'
import NavBar from './assets/Components/NavBar'
import About from './assets/Components/About'
// import Page404 from './assets/Components/Page404'
import User from './assets/Components/User'

function App() {


  return (
    <>
      <h2>React router V6.12</h2>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user/:namee' element={<User />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Navigate to='/' />} />
          {/* <Route path='/*' element={<Page404 />} /> */}

        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
