import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Login from './pages/Login'
//import Signup from './pages/signup'
import Landing from './pages/Landing'
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'
import Home from './pages/Home'
import Search from './pages/Search'

const App = () => {
  return (
    <div className='main-holders'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={< Signup/>}/>
          <Route path='/dashboard' element={< Home/>}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
