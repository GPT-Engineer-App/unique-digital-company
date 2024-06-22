import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ProductFireAlarm from "./pages/ProductFireAlarm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/product-fire-alarm" element={<ProductFireAlarm />} />
      </Routes>
    </Router>
  );
}

export default App;
