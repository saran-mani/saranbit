import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import TnTemple from './TN/TnTemple';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore-temples'element={<TnTemple/>}/>
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
