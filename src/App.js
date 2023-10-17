
import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";

import "./index.css";
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Sponsor from './sponsor/Sponsor';
import Events from './Events/Events';
import ContactUs from './ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sponsors" element={ <Sponsor/> }></Route>
        <Route path="/events" element={ <Events/> }></Route>
        <Route path="/contact" element={ <ContactUs/> }></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;

