import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useCharStates } from "./Context/Context";

function App(){

const{state} = useCharStates()
return (
      <div className={state.theme + " App"}>
          <Navbar/>
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path="/detail/:id" element = {<Detail/>}/>
              <Route path="/favs" element = {<Favs/>}/>
              <Route path="/contact" element = {<Contact/>}/>
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
