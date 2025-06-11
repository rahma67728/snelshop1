import React from "react";
import './Css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import objs from "./Data/objs";
import Home from "./Comp/Home";
import Orders from "./Comp/Orders";
import Products from "./Comp/Products";
import { Provider } from "react-redux";
import store from "./Store/store";
import About from "./Comp/About";
import Contact from "./Comp/Contact";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/ShoesStore-Redux/" element={<Home />} />
          <Route path="/ShoesStore-Redux/Products" element={<Products objs={objs} />} />
          <Route path="/ShoesStore-Redux/Orders" element={<Orders objs={objs} />} />
          <Route path="/ShoesStore-Redux/About" element={<About />} />
          <Route path="/ShoesStore-Redux/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
