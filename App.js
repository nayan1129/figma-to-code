import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Board from './Components/Pages/Board'
import Dashboard from './Components/Pages/Dashboard'
import Transactions from './Components/Pages/Transactions'
import Schedules from './Components/Pages/Schedules'
import User from './Components/Pages/User'
import Setting from './Components/Pages/Setting'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/figma-to-code'>
      <Navbar />
      <Routes>
      <Route path='/' element={<Board />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/transactions' element={<Transactions />}/>
      <Route path='/schedules' element={<Schedules />}/>
      <Route path='/user' element={<User />}/>
      <Route path='/setting' element={<Setting />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
