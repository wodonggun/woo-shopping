import logo from './logo.svg';
import './App.css';
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppStateProvider from "./providers/AppStateProvider";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignEdit from "./pages/SignEdit";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/signEdit" element={<SignEdit />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
