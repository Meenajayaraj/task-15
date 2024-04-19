import CardGrid from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  const [cartValue, setCartValue] = useState(0);
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Navbar cartValue={cartValue} />
      <Header />
      <div>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
