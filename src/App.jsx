import './sass/App.scss';
import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/cadastro' element={<SignUp/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
