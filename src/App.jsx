import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
function App() {
  let [cart, setCart] = useState(0);
  return (
    <>
      <NavBar cart={cart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
            <Card setCart={setCart} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
