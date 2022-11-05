import Hero from './Components/Hero';
import Navbar from './Components/Navbar'


function App() {
  return (
    <div className="w-full h-[100vh] dark:bg-[#151D3B] transition duration-500">
     <Navbar />
     <Hero />
    </div>
  );
}

export default App;
