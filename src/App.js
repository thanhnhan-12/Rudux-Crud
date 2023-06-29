import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Userlisting from './Component/Userlisting';
import Adduser from './Component/Adduser';
import Updateuser from './Component/Updateuser';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Userlisting />} />
          <Route path="/user/add" element={<Adduser />} />
          <Route path="/user/edit/:code" element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
