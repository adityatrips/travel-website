import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ServicesScreen from "./screens/ServicesScreen";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ContactScreen from "./screens/ContactScreen";
import PackageDetailsScreen from "./screens/PackageDetailsScreen";
import Destinations from "./screens/Destinations";

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
          <Route path="/package/:place/:packageName"
                 element={<PackageDetailsScreen/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
