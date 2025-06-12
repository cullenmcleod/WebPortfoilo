import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import Navbar from './components/Navbar';
import  MoblieMenu from './components/MoblieMenu';
import Home from './components/sections/Home';
import  About  from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? 'opacity-100' : 'opacity-0'} bg-emerald-600 text-white`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MoblieMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects/>
          <Contact />

        </div>
    </>
    
  );
};

export default App
