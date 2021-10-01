import './Styles/App.css';
import 'react-bootstrap'
import React from "react";
import Header from "./Components/Header/Header";
import MyCarousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import img from './Components/Carousel/Sprite/warcraft.jpg'




function App() {
  return (
    <div className="App">
        <Header/>
        <MyCarousel src1={img} src2={img} src3={img} />
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
