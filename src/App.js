
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   <Navbar />
   <div className="container mt-4" >
   <TextForm />
   <About />
   </div>
   </> 
  );
}

export default App;
