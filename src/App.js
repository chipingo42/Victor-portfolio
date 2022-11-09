import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="w-full h-[100vh] dark:bg-[#151D3B] transition duration-500">
      <Routes>
        <Route path='/' element={<Navbar />}/>
        <Route path='/' element={<Hero />}/>
      </Routes>
     {/* <Navbar />
     <Hero /> */}
    </div>
    
  );
}

export default App;
