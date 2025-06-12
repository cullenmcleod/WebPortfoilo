
import '../index.css'

// import logo from '../assets/image.png'

export const MoblieMenu = ({menuOpen, setMenuOpen}) =>{
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-60 z-50 items-center justify-center
    transition-all duratition-300 ease-in-out
    ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
    `}>
        <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer">
            &times;
        </button>

        
          <a href="#home" onClick={()=> setMenuOpen(false)}
          className={`text-2xl text-grey-300 hover:white my-4 transition-colors justify-center items-center flex flex-col duration-300
            ${menuOpen ? "opacity-100  translate-y-0" :  'opacity-0 translate-y-5'}`}
          >
                {""}
                Home
                {""}
              </a>

              <a href="#about" onClick={()=> setMenuOpen(false)}className={`text-2xl text-grey-300 hover:white my-4 transition-colors justify-center items-center flex flex-col duration-300
            ${menuOpen ? "opacity-100  translate-y-0" :  'opacity-0 translate-y-5'}`}>
                {""}
                about
                {""}
              </a>

              <a href="#Projects" onClick={()=> setMenuOpen(false)}className={`text-2xl text-grey-300 hover:white my-4 transition-colors justify-center items-center flex flex-col duration-300
            ${menuOpen ? "opacity-100  translate-y-0" :  'opacity-0 translate-y-5'}`}>
                {""}
                Projects
                {""}
              </a>
              <a href="#contact" onClick={()=> setMenuOpen(false)}className={`text-2xl text-grey-300 hover:white my-4 transition-colors justify-center items-center flex flex-col duration-300
                ${menuOpen ? "opacity-100  translate-y-0" :  'opacity-0 translate-y-5'}`}>
                {""}
                contact
                {""}
              </a>
              <hr />
            
    </div>
  );
};

export default MoblieMenu;

