import React from "react";
import Payment from "./Pages/Payment";
import Login from './Pages/Login';
import UserRegistration from "./Pages/UserRegistration";

import { Route, Routes } from "react-router-dom";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";

function App() {
  return (
    <div>
      <Routes>
              <Route path='/' element={<Login/>}/>
             <Route path='/user' element={<UserRegistration/>}/>
              <Route path='/payment' element={<Payment/>}/>
               <Route path='/success' element={<Success/>}/>
                <Route path='/cancel' element={<Cancel/>}/>

      </Routes>
    </div>
  );
}

export default App;
