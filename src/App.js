import './App.css';
import Navbar from './MyComponent/Navbar.js'
import TextForm from './MyComponent/TextForm.js'
import About from './MyComponent/About.js'
import React,{ useState } from 'react';
import Alert from './MyComponent/Alert.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

document.body.style.backgroundColor="rgb(5 45 75)"
function App() {
  
  const [mode,setMode]=useState("dark")
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert("")
    },2000)
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Has Been Enabled","success")
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor="rgb(5 45 75)"
      showAlert("Dark Mode Has Been Enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Space" mode={mode}  showAlert={showAlert} />}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
