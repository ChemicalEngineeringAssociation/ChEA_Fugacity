import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { Suspense, lazy } from "react";
import Loading from "./Loading";
import About from "./About/About.jsx";

const ContactUs = lazy(() => import("./ContactUs/ContactUs"));
const Events = lazy(() => import("./Events/Events"));
const Sponsor = lazy(() => import("./sponsor/Sponsor"));
const Merchandise = lazy(() => import("./Merchandise/Merchandise"));
const Register = lazy(() => import("./Register/Register"));

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/sponsors"
          element={
            <Suspense fallback={<Loading />}>
              <Sponsor />
            </Suspense>
          }
        ></Route>
        <Route path="/events" element={<Suspense fallback={<Loading />}>
              <Events />
            </Suspense>}></Route>
        <Route path="/contact" element={<Suspense fallback={<Loading />}>
              <ContactUs />
            </Suspense>}></Route>
        <Route path="/merchandise" element={<Suspense fallback={<Loading />}>
              <Merchandise />
        </Suspense>}></Route>
        <Route path="/Register" element={<Suspense fallback={<Loading />}>
              <Register />
        </Suspense>}></Route>
        <Route path="/About" element={<Suspense fallback={<Loading />}>
              <About />
        </Suspense>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
