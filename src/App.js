import './Styles/App.css';
import Header from "./Components/Header/Header";
import 'react-bootstrap'
import MyCarousel from "./Components/Carousel/Carousel";


function App() {
  return (
    <div className="App">
      <Header/>
      <MyCarousel/>
    </div>
  );
}

export default App;
