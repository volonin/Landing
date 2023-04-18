import './App.css';
import Header from "./Header/Header";
import TopBanner from "./Main/Top-banner/TopBanner";
import Carousel from "./Main/Content/Carousel/Carousel";
import Infonation from "./Main/Content/Information/Information";

function App() {
  return (
      <div className="App">
        <Header/>
        <TopBanner/>
        <Carousel/>
        <Infonation/>
      </div>
  );
}

export default App;