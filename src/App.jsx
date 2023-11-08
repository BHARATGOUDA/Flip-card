import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Home from './Components/Home'
import { ToastContainer } from 'react-toastify'
import List from './Components/List'
const App = () => {
  return (
    <div>
          <ToastContainer/> 
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/create' element={<Register/>}/>
                <Route path='/user/:index' element={<Home />}/>
                <Route path='/list' element={<List/>}/>
              </Routes>
      </BrowserRouter>
    </div>  
  )
}
export default App