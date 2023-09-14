
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Home'


function App() {


  return (
    <>
      <h2>React router V6.12</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
