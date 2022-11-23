
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBooking from './Component/Dashboard/Booking/DashBooking';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardHome from './Component/Dashboard/DashboardHome/DashboardHome';
import ProfileItem from './Component/Dashboard/Profile/ProfileItem';
import ReviewsItem from './Component/Dashboard/Reviews/ReviewsItem';
import SettingsSide from './Component/Dashboard/Settings/SettingsSide';
import Login from './Component/Form/Login/Login';
import Register from './Component/Form/Register/Register';
import Home from './Component/Home/Home';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';
import BookingList from './Component/Pages/Pages/BookingList/BookingList';
import AuthProvider from './Hooks/AuthProvider';

function App() {
  return (
    <div className='bg-amber-50'>
      <AuthProvider>
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
            
            <Route path='/booking-list' element={<BookingList />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
