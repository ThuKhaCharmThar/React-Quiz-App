import Footer from './Footer';
import Navbars from './Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbars />
        
          <Outlet/>
        
        <Footer />
      
    </div>
  );
}

export default App;
