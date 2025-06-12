import { Outlet, Link } from "react-router-dom";
import '../index.css'
import { useEffect } from "react";
// import logo from '../assets/image.png'

export default function Navbar({menuOpen, setMenuOpen}) {
  useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
  }
  , [menuOpen]);
  return (
    
    <nav className="fixed top-0 left-0 w-full bg-blue-600 shadow-md p-1 z-40">
      <div className="max-w-7xl mx-auto px4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-white text-xl font-bold">
            {""}
            Cullen<span className="text-green-300 font-bold text-2xl">.Mcleod</span>{""}
          </a>
          
            {/* Mobile menu toggle */}
            <div className="w-6 h-3 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
              &#9776;
            </div>
            <div className="hidden md:flex items-center space-x-8">

              <a href="#home" className="text-grey-300 hover:white transition-colors">
                {""}
                Home
                {""}
              </a>

              <a href="#about" className="text-grey-300 hover:white transition-colors">
                {""}
                about
                {""}
              </a>

              <a href="#projects" className="text-grey-300 hover:white transition-colors">
                {""}
                Projects
                {""}
              </a>
              <a href="#contact" className="text-grey-300 hover:white transition-colors">
                {""}
                contact
                {""}
              </a>
            </div>
          
        </div>
      </div>
    </nav>
    
    


    
    
  );
};

