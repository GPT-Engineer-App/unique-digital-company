import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProductFireAlarm from "./pages/ProductFireAlarm.jsx";
import ProductCCTV from "./pages/ProductCCTV.jsx";
import ProductPA from "./pages/ProductPA.jsx";
import ProductElectricalLowVoltage from "./pages/ProductElectricalLowVoltage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/product-fire-alarm" element={<ProductFireAlarm />} />
      <Route path="/product-cctv" element={<ProductCCTV />} />
        <Route path="/product-pa" element={<ProductPA />} />
        <Route path="/product-electrical-low-voltage" element={<ProductElectricalLowVoltage />} />
      </Routes>
    </Router>
  );
}

export default App;
