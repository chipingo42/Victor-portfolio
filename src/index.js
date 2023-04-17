import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Projects",
    element: <Projects />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


