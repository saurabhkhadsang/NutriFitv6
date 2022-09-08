import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Account from "./components/Account/Account";
import Search from "./components/Search/Search";
import Searchlogin from "./components/Search/Searchlogin";
import News from "./components/news/News";
import Help from "./components/help/Help";
import Verifyotp from "./components/VerifyOtp/Verifyotp"
import ResendOtp from "./components/VerifyOtp/ResendOtp"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import ResetPassword from "./components/ForgetPassword/ResetPassword"
import './App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <ToastContainer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/searchlogin" element={<Searchlogin />} />
        <Route path="/news" element={<News />} />
        <Route path="/help" element={<Help />} />
        <Route path="/verifyotp" element={<Verifyotp />} />
        <Route path="/resendotp" element={<ResendOtp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
