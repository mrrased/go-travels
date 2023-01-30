
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBooking from './Component/Dashboard/Booking/DashBooking';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardHome from './Component/Dashboard/DashboardHome/DashboardHome';
import UsersMessage from './Component/Dashboard/DashboardHome/UsersMessage/UsersMessage';
import Employee from './Component/Dashboard/Employee/Employee';
import InfoDash from './Component/Dashboard/InfoDash/InfoDash';
import ProfileItem from './Component/Dashboard/Profile/ProfileItem';
import ReviewsItem from './Component/Dashboard/Reviews/ReviewsItem';
import SettingsSide from './Component/Dashboard/Settings/SettingsSide';
import Login from './Component/Form/Login/Login';
import Register from './Component/Form/Register/Register';
import Home from './Component/Home/Home';
import About from './Component/Pages/About/About';
import Contact from './Component/Pages/Contact/Contact';
import BookingDetails from './Component/Pages/Pages/BookingDetails/BookingDetails';
import BookingList from './Component/Pages/Pages/BookingList/BookingList';
import AdminRoute from './Hooks/AdminRoute';
import AuthProvider from './Hooks/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute';

function App() {
  return (
    <div className='bg-amber-50'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} /> 

            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>

              <Route path='/dashboard' element={ <DashboardHome />} />
              <Route path='/dashboard/booking' element={<AdminRoute><DashBooking /></AdminRoute>} />
              <Route path='/dashboard/employee' element={<AdminRoute><Employee /></AdminRoute>} />
              <Route path='/dashboard/service' element={<AdminRoute><ProfileItem /></AdminRoute>} />
              <Route path='/dashboard/reviews' element={<AdminRoute><ReviewsItem /></AdminRoute>} />
              <Route path='/dashboard/info' element={<AdminRoute><InfoDash /></AdminRoute>} />
              <Route path='/dashboard/settings' element={<AdminRoute><SettingsSide /></AdminRoute>} />
              <Route path='/dashboard/users-message' element={<AdminRoute><UsersMessage /></AdminRoute>} />

            </Route> 
            
            <Route path='/booking-list' element={<BookingList />} /> 
            <Route path='/booking-details/:detailsId' element={<BookingDetails />} /> 
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
