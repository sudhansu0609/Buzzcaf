//import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";


// Components


// Screens
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OriginalPage from "./pages/original";
import IrishHazelnutPage from "./pages/irishHazelnut";
import BelgianChocolatePage from "./pages/belginanChocolate";
import DesirePage from "./pages/desire";
import CaramelPage from "./pages/caramel";
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <main className="app">
       {/* <Routes>  */}
       <div>
          <Routes basename="/" hashType="noslash">
            <Route exact path="/home" component={HomePage} />
            <Route  path="/" element={<HomePage/>} exact />
            <Route exact path="/product/:id" element={<ProductPage/>} />
            <Route exact path="/cart" element={<CartPage/>} />
            <Route exact path= "/pages/caramel" element={<CaramelPage/>} />
            <Route exact path= "/pages/desire" element={<DesirePage/>} />
            <Route exact path= "/pages/belginaChocolate" element={<BelgianChocolatePage/>} />
            <Route exact path= "/pages/original" element={<OriginalPage/>} />
            <Route exact path= "/pages/irishHazelnut" element={<IrishHazelnutPage/>} />
          </Routes>
        </div>
        {/* </Routes> */}
    </main>
  );
}

export default App;