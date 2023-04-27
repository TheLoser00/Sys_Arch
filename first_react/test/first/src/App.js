import background from './images/space.png';
import {Routes, Route} from 'react-router-dom';
import logo from './images/logo.png'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: '110vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
