import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Resum from './Components/Resum';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="w-full h-full dark:bg-[#151D3B]">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/About' element={<About/>}/> */}
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Resum' element={<Resum/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
