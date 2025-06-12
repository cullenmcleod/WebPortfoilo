
import '../index.css'

// import logo from '../assets/image.png'

export const MoblieMenu = ({menuOpen, setMenuOpen}) =>{
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-50 items-center justify-center
    transition-all duratition-300 ease-in-out
    ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
    `}>
        <button onclick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
            &times;
        </button>
    </div>
  );
};

export default MoblieMenu;

