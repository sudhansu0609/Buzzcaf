//import "./App.css";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

// Screens
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <main className="app">
       {/* <Routes>  */}
       <div>
          <Routes>
          <Route exact path="/home" component={HomePage} />
          <Route  path="/" element={<HomePage/>} exact />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
          </Routes>
        </div>
        {/* </Routes> */}
    </main>
  );
}

export default App;