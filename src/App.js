import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/forgotPassword' element={<ForgotPassword />}/>
          <Route path='/resetPassword' element={<ResetPassword />}/>

        </Routes>
       </BrowserRouter>
       <ToastContainer />
    </div>
  );
}

export default App;
