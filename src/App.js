import NavigationBar from './utilities/navbar';
import RSA from './pages/RSA';
import Intro from './pages/INTRODUCTION';
import Maths from './pages/MATHS';
import DH from './pages/DIFFIE-HELLMAN';
import Home from './pages/HOME';
import AUTH from './pages/AUTH';


const route = (path) => {
  switch (path) {
    case '/AUTH.js':
      return(<AUTH />);
    case '/RSA.js':
      return(<RSA />);
    case '/DIFFIE-HELLMAN.js':
      return(<DH />);
    case '/MATHS.js':
      return(<Maths />);
    case '/INTRODUCTION.js':
      return(<Intro />);
    default:
      return(<Home />);
  }
}

const App = () => {
  return(
    <>
      <NavigationBar />
      {route(window.location.pathname)}
    </>
  );
}

export default App;
