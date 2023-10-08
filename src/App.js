
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
import Sponser from './sponsor/Sponsor';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sponser" element={ <Sponser/> }></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
  </Router>
  );
}

export default App;

