
import Header from "../components/Header";
import Prototypes from "../components/Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import Side from "../components/Side";
import Login from "../components/Login";
import HeaderBar from "../components/HeaderBar";

import AppStateProvider from "../providers/AppStateProvider";

import Top from "../frame/top.js";
import Bottom from "../frame/bottom";


export default function SignIn(){
  return (
    <>
     <div className="headercontainer">
      <HeaderBar />
      </div>
      <div className="logincontainer">
        <Login />
      </div>
    </>
  )
}