//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer1';
import Home from './components/Home1';
import About from './components/AboutUs';
import OurDoctors from './components/OurDoctors'
import OurCentres from './components/OurCentres'
import BookAnAppointment from './components/BookAnAppointment'
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import Dashboard from '../src/admin/Dashboard'
import DoctorsList from '../src/admin/DoctorsList'
import CentresList from '../src/admin/CentresList'
import AppointmentList from '../src/admin/AppointmentList'
import AddCentre from '../src/admin/AddCentre'
import AddDoctor from '../src/admin/AddDoctor'
import EditCentre from '../src/admin/EditCentre'
import EditDoctor from '../src/admin/EditDoctor'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/centres" element={<OurCentres />}></Route>
          <Route path="/doctors" element={<OurDoctors />}></Route>
          <Route path="/bookanappointment" element={<BookAnAppointment />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/doctorslist" element={<DoctorsList />}></Route>
          <Route path="/admin/centreslist" element={<CentresList />}></Route>
          <Route path="/admin/appointmentlist" element={<AppointmentList />}></Route>
          <Route path="/admin/addcentre" element={<AddCentre />}></Route>
          <Route path="/admin/adddoctor" element={<AddDoctor />}></Route>
          <Route path="/admin/editcentre" element={<EditCentre />}></Route>
          <Route path="/admin/editcentre/:id" element={<EditCentre />}></Route>
          <Route path="/admin/editdoctor" element={<EditDoctor />}></Route>
          <Route path="/admin/editdoctor/:id" element={<EditDoctor />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
