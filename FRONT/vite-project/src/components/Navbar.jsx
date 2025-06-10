import { Outlet, Link } from "react-router-dom";
import '../index.css'
import logo from '../assets/image.png'
export default function Navbar() {
  return (
    
    <div>
      <nav class ="bg-blue-600 shadow-md p-1">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center">
            <img src={logo} alt="logo" class="w-15 h-15 p-1 rounded-full"/>
            <ul class="flex space-x-1 text-gray-700 ">
              <li class="bg-blue-300 rounded-md p-3">
               <Link to="/">Home</Link>
              </li>
              <li class="bg-blue-300 rounded-md p-2">
               <Link to="/Contact">Contact</Link>
             </li>
              <li class="bg-blue-300 rounded-md p-2">
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

