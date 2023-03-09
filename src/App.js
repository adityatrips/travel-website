import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ContactScreen from "./screens/ContactScreen";
import Destinations from "./screens/Destinations";
import Bali from "./screens/packageDetails/Bali";
import Dubai from "./screens/packageDetails/Dubai";
import Europe from "./screens/packageDetails/Europe";
import India from "./screens/packageDetails/India";
import Kerala from "./screens/packageDetails/Kerala";
import Singapore from "./screens/packageDetails/Singapore";
import Thailand from "./screens/packageDetails/Thailand";
import BaliDest from "./screens/packageDetails/BaliDest";
import DubaiDest from "./screens/packageDetails/DubaiDest";
import EuropeDest from "./screens/packageDetails/EuropeDest";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/services" element={<ServicesScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path={"/destinations/bali"} element={<Bali/>}/>
          <Route path={"/package/bali/:dest"} element={<BaliDest/>}/>
          <Route path={"/destinations/dubai"} element={<Dubai/>}/>
          <Route path={"/package/dubai/:dest"} element={<DubaiDest/>}/>
          <Route path={"/destinations/europe"} element={<Europe/>}/>
          <Route path={"/package/europe/:dest"} element={<EuropeDest/>}/>
          <Route path={"/destinations/india"} element={<India/>}/>
          <Route path={"/destinations/kerala"} element={<Kerala/>}/>
          <Route path={"/destinations/singapore"} element={<Singapore/>}/>
          <Route path={"/destinations/thailand"} element={<Thailand/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
