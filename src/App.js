
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
    <div className='bg-amber-50'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
