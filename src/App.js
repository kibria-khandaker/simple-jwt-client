import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/AuthUser/Login';
import SignUp from './components/AuthUser/SignUp';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>

    </div>
  );
}

export default App;
