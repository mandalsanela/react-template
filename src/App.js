import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import AboutUs from "./screens/aboutUs/aboutUs";
import LandingPage from "./screens/landingPage/landingPage";
import navbar from './constants/navRoutes';
import './index.css';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [label, setLabel] = useState('unesi ime');
  const [label1, setLabel1] = useState('unesi prezime');


  return (
    <BrowserRouter>
    <Navbar navbar={navbar} title='Selam alejk' name={name} lastName={lastName}/>
      <Routes>
        <Route path="/" element={<LandingPage name={name} lastName={lastName} label={label} label1={label1}
         setName={setName} setLastName={setLastName} />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
