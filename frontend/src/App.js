import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './Components/NavigationBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { RegisterUser } from './Components/RegisterUser';
import { Footer } from './Components/Footer';
import { LoginUser } from './Components/LoginUser';
import { BookingForm } from './Components/BookingForm';
import { BookingForms } from './Components/Date';
import { BookingConfirmed } from './Components/BookingConfirmed';
import { CheckBooking } from './Components/CheckBooking';
import Map from './Components/Map'; 
import { BASE_ROUTE, ABOUT_US_ROUTE, LOGIN_USER_ROUTE, REGISTRATION_USER_ROUTE, CHECK_BOOKING_ROUTE, MAP_ROUTE } from './Constants/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={BASE_ROUTE} element={<Home />} />
        <Route path={ABOUT_US_ROUTE} element={<About />} />
        <Route path={LOGIN_USER_ROUTE} element={<LoginUser />} />
        <Route path={REGISTRATION_USER_ROUTE} element={<RegisterUser />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/dateform" element={<BookingForms />} />
        <Route path="/bookingconfimed" element={<BookingConfirmed />} />
        <Route path={CHECK_BOOKING_ROUTE} element={<CheckBooking />} />
        <Route path={MAP_ROUTE} element={<Map />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
