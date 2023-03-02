import {BrowserRouter, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ContactScreen from "./screens/ContactScreen";
import PackageDetailsScreen from "./screens/PackageDetailsScreen";
import Destinations from "./screens/Destinations";
import Bali from "./screens/packageDetails/Bali";
import Dubai from "./screens/packageDetails/Dubai";
import Europe from "./screens/packageDetails/Europe";
import India from "./screens/packageDetails/India";
import Kerala from "./screens/packageDetails/Kerala";
import Singapore from "./screens/packageDetails/Singapore";
import Thailand from "./screens/packageDetails/Thailand";

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/services" element={<ServicesScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/package/:place" element={<PackageDetailsScreen/>}/>
          <Route path={"/destinations/bali"} element={<Bali/>}/>
          <Route path={"/destinations/dubai"} element={<Dubai/>}/>
          <Route path={"/destinations/europe"} element={<Europe/>}/>
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
