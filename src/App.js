import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import About from './Components/About';
import Projects from './Components/Projects';
import Resum from './Components/Resum';






function App() {
  return (
    <div className="w-full h-full dark:bg-[#151D3B]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Resum' element={<Resum/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
