import './App.css';

import Navbar from './components/common/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Skills from './components/pages/Skills';

function App() {
  return (
    <div className=' overflow-x-hidden'> 
    <Navbar />
    <Home />
 
    <Skills />
    <Services />

    </div>
   
  );
}

export default App;
