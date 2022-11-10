import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
// import Hero from './Components/Hero';



function App() {
  return (
    <div className="w-full dark:bg-[#151D3B]">
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='Projects' element={<Projects />}/>
      </Routes>
    </div>
    
  );
}

export default App;
