
import './App.css';
import Header from './Component/layout/Header';
import Home from '../src/Home';
import About from './Component/Pages/About';
import Portfolio from './Component/Pages/Portfolio';
import Service from './Component/Pages/Service';
import Contact from './Component/Pages/Contact';
import Footer from './Component/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './Component/Pages/Error';

function App() {
  return (
    <Router>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/service' element={<Service/>} />
      <Route path='/contact-us' element={<Contact/>} /> 
      <Route path='*' element={<Error/>} /> 

    </Routes>
    <Footer/>
  </Router>

  );
}
export default App;