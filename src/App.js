import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import TnTemple from './TN/TnTemple';
import About from './About/About';
import Conatct from './Contact/Contact';
import { T1, T10, T11, T12, T2, T3, T4, T5, T6, T7, T8, T9 } from './TN/ReadMoreTEmple';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore-temples'element={<TnTemple/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Conatct/>}/>
        <Route path='/explore-temples/t1' element={<T1/>}/>
        <Route path='/explore-temples/t2' element={<T2/>}/>
        <Route path='/explore-temples/t3' element={<T3/>}/>
        <Route path='/explore-temples/t4' element={<T4/>}/>
        <Route path='/explore-temples/t5' element={<T5/>}/>
        <Route path='/explore-temples/t6' element={<T6/>}/>
        <Route path='/explore-temples/t7' element={<T7/>}/>
        <Route path='/explore-temples/t8' element={<T8/>}/>
        <Route path='/explore-temples/t9' element={<T9/>}/>
        <Route path='/explore-temples/t10' element={<T10/>}/>
        <Route path='/explore-temples/t11' element={<T11/>}/>
        <Route path='/explore-temples/t12' element={<T12/>}/>



      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
