import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import Loginpage from './components/loginpage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/login" element={<Loginpage />} />
   
    </Routes>
    </BrowserRouter>
    
  );
  };
export default App;
