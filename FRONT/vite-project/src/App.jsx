import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import './index.css'
import Navbar from './components/Navbar';
import  MoblieMenu from './components/MoblieMenu';

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? 'opacity-100' : 'opacity-0'} bg-emerald-600 text-white`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MoblieMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    </>
    
  );
};

export default App
