import './App.css'
import Profile from "./Profile"
import Login from "./Login"
import Register from "./Register"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<index />} />
  <Route path="/login" element={< Login />} />
  <Route path="/register" element={<Register />} />
          
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;



