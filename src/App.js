import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './routes/About/About';
import Appointment from './routes/Appointment/Appointment';
import ContactUs from './routes/ContactUs/ContactUs';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import RequireAuth from './routes/Login/RequireAuth';
import Reset from './routes/Login/Reset';
import SignUp from './routes/Login/SignUp';
import Reviews from './routes/Reviews/Reviews';
import Navbar from './shared/Navbar/Navbar';

function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
