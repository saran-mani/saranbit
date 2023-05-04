import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import TnTemple from './TN/TnTemple';
import About from './About/About';
import Conatct from './Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore-temples'element={<TnTemple/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Conatct/>}/>

      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
