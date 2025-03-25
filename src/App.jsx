import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Hometwo from './pages/Hometwo'
import Detail from './pages/Detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import Detaillisting from './pages/Detaillisting'
import Agent from './pages/Agent'
import Mexico from './pages/Mexico'
import Mexicoone from "./pages/Mexicoone";
import About from './pages/About'
import Cont from './pages/Cont';
import Error from './pages/Error'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>  
     <Routes>
      <Route path="/home" element={<Homepage/>}></Route>
      <Route path="/home2" element={<Hometwo/>}></Route>
      <Route path="/home3" element={<Detail/>}></Route>
      <Route path="/home4" element={<Detaillisting/>}></Route>
      <Route path="/home5" element={<Agent/>}></Route>
      <Route path="/home6" element={<Mexico/>}></Route>
      <Route path="/home7" element={<Mexicoone/>}></Route>
      <Route path="/home8" element={<About/>}></Route>
      <Route path="*" element={<Error/>}></Route>


      
     </Routes>
      
    </>
  )
}

export default App
