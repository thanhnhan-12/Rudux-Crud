import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Adduser from './Component/Adduser';
import Home from './Component/Home';
import Updateuser from './Component/Updateuser';
import Userlisting from './Component/Userlisting';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <Link to={'/'}>Home</Link>
            <Link to={'/user'}>User</Link>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Userlisting />} />
            <Route path="/user/add" element={<Adduser />} />
            <Route path="/user/edit/:code" element={<Updateuser />} />
          </Routes>
        </BrowserRouter>

        <ToastContainer className="toast-position" position='bottom-right'>
          
        </ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
