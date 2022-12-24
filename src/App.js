
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [alert,setAlert] = useState(null)

  const showAlert=(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  return (
   <>
   <BrowserRouter>
      <Navbar />
      <Alert  alert={alert}/>
      <div className="container mt-4" >
      <Routes>
        <Route exact path='/'  element={<TextForm showAlert={showAlert} />}/>
        <Route exact path='/about' element={<About />} />
      </Routes>
      </div>
    </BrowserRouter>
   </> 
  );
}

export default App;
