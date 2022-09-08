
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className='bg-amber-50'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
