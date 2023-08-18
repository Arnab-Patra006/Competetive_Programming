
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,  // Use Routes instead of Switch
} from "react-router-dom";

function App() {
  const [currmode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses=()=>{
    console.log("Hii");
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (currmode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(153,135,233)';
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Arnab" kuchbhi="Kuch Bhi" mode={currmode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-5'>
          <Routes>
            <Route path="/" element={<TextForm heading="This is goona be my heading" mode={currmode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
