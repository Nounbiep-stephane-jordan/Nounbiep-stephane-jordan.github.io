import React,{useState} from "react"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import './App.css';
import Chat from "./componnents/chat/chat";
import Join from "./componnents/join/join";
 
 
function App() {
 
 

  return (
   
    <div className="App">
<Router>
  <Routes>
    <Route path="/" exact element={<Join/>} />
    <Route path="/chat/:name/:room" element={<Chat />}/>
  </Routes>
</Router>
    </div>
     
  );
}

export default App;
 