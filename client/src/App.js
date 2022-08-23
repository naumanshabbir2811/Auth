import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      {/* // <SignUp /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
