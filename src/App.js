import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>

        </Routes>
       </BrowserRouter>
       <ToastContainer />
    </div>
  );
}

export default App;
