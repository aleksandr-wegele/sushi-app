import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LeftBar from "./components/leftbar/LeftBar"
import RightBar from "./components/rightbar/RightBar"
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <LeftBar/>
      <Header/>
      <main>
        <div className="content__container">
         <Home/>
        </div>
      </main>
      <Footer/>
      <RightBar/>
    </div>
  );
}

export default App;
