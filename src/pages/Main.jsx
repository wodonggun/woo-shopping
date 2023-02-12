
import Header from "../components/Header";
import Prototypes from "../components/Prototypes";
import Orders from "../components/Orders";
import Footer from "../components/Footer";
import Side from "../components/Side";

import AppStateProvider from "../providers/AppStateProvider";

import Top from "../frame/top.js";
import Bottom from "../frame/bottom";


export default function Main(){
  return (
    <>
    <AppStateProvider>
      <div className="container">
        <Side />
        <Header />
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
    </>
  )
}