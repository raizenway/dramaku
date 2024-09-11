import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const hideNavAndFooter = location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main>
        <Outlet />
      </main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
