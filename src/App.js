import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';



function App() {
  return (
    <div className="w-full h-[100vh] dark:bg-[#151D3B] transition duration-500">
      <Routes>
        <Route path='/' index={Navbar} element={<Navbar />}/>
        <Route path='/Projects' element={<Projects />}/>
      </Routes>
    </div>
    
  );
}

export default App;
