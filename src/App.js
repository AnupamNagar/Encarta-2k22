import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './component/Home';
// import Navbar from './component/Navbar';
// import Signup from './component/Signup';
import Login from './component/Register';
import Events from './component/Events';
import Sponsors from './component/Sponsors';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Login/>}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/sponsors' element={<Sponsors />}></Route>   
        <Route path='/contact' element={<Contact />}></Route>  
        <Route path='/footer' element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>
    </>
   
    
  );
}

export default App;
