import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="w-full h-[100vh] dark:bg-[#151D3B] transition duration-500">
      <Routes>
        <Route path='/' element={<Navbar />}/>
      </Routes>
    </div>
    
  );
}

export default App;
