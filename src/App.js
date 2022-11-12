import Navbar from './Components/Navbar'
// import { Route, Routes } from 'react-router-dom';
// import Projects from './Components/Projects';
// import Hero from './Components/Hero';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="w-full h-[100vh] dark:bg-[#151D3B]">
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
