import NavigationBar from './utilities/navbar';
import RSA from './pages/RSA';
import Intro from './pages/INTRODUCTION';
import Maths from './pages/MATHS';
import DH from './pages/DIFFIE-HELLMAN';
import Home from './pages/HOME';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {
  return(
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/RSA.js" element={<RSA />} />
        <Route path="/DIFFIE-HELLMAN.js" element={<DH />} />
        <Route path="/MATHS.js" element={<Maths />} />
        <Route path="/INTRODUCTION.js" element={<Intro />} />
        <Route path="/not_cryptohack" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
