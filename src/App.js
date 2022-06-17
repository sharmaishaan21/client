import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Code from './components/Code';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

//https://harmonious-kataifi-55a9d2.netlify.app