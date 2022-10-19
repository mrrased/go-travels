
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBooking from './Component/Dashboard/Booking/DashBooking';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardHome from './Component/Dashboard/DashboardHome/DashboardHome';
import ProfileItem from './Component/Dashboard/Profile/ProfileItem';
import ReviewsItem from './Component/Dashboard/Reviews/ReviewsItem';
import SettingsSide from './Component/Dashboard/Settings/SettingsSide';
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
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard' element={<DashboardHome />} />
            <Route path='/dashboard/booking' element={<DashBooking />} />
            <Route path='/dashboard/profile' element={<ProfileItem />} />
            <Route path='/dashboard/reviews' element={<ReviewsItem />} />
            <Route path='/dashboard/settings' element={<SettingsSide />} />
            </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
