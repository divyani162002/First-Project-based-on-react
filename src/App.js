import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
//  this is the heart file f this prject
//

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   setAlert({ 
    msg: message,
    type: type
  })
  setTimeout(() => {
  setAlert(null);
  },1500);
  }

  const toogleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("dark mode has been enabeled ","success");
      setInterval(()=>{
   document.title= 'TextUtils - Light Mode';
      },2000);
      
    

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabeled ","success");
      setInterval(()=>{
        document.title= 'TextUtils - Dark Mode';
      },1500);
    }

  };

  return (
  <>

    {/* <BrowserRouter> */}
    <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container" my="3">
      {/*<Routes>
        <Route  exact path="/about" element={ <About />} />
       
<Route exact path="/" element={*/}
        <TextForm  showAlert={showAlert} heading="Enter the text to analyze" mode={mode} /> 
         {/* />} 
      </Routes>    */}
     </div>
    {/* </BrowserRouter> */}
  
    </>
  );
}

export default App;
