
import React from 'react'
import './index.css'
import App from './App.jsx'
import * as reactDOM from 'react-dom/client'
// import Navbar from './components/Navbar.jsx'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { createBrowserRouter } from 'react-router-dom'
// import Contact from './Contact.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navbar/>,
//     children: [
//     {index: true, element: <App/>},
//     {path: 'Contact', element: <Contact/>},
    


//     ]
//   }
// ]);


reactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>	
)
  
  




// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/> 
//   </React.StrictMode>	
// )
