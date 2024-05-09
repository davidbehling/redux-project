import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Address from '../pages/Address'

function RoutesApp(){
  return(
    <Routes>
      <Route path="/" element={ <Login/> } />
      <Route path="/home" element={ <Home/> } />
      <Route path="/address" element={ <Address/> } />
    </Routes>
  )
}

export default RoutesApp