import background from './images/space.png';
import logo from './images/logo.png'
import './App.css';
import Navbar from './components/Navbar';
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
          <Navbar></Navbar>
      </div>
      
      
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
      }}>
      
      <h1 style={{color: '#E0ECE4', fontSize: '100px'}}>Welcome</h1>
      
      <div className="App">
      <header>
        <img src={logo} className="App-logo"/>
      </header>
      </div> 
      </div>

    </div>
  );
}

export default App;
