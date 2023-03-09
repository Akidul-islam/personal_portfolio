import React, { useState, useEffect } from "react";
// COMPONENT
import { Route, Routes } from "react-router-dom";
import Home from "./componetFolder/Pages/Home/Home";

function App() {
  const [load, setLoad] = useState(true);
  const [lo, setLo] = useState(false);
  const initialChng = () => {
    setLoad(false);
  };

  useEffect(() => {
    const ID = setTimeout(() => {
      initialChng();
      setLo(true);
    }, 500);

    return () => {
      clearInterval(ID);
    };
  }, []);

  if (load) {
    return (
      <div className="h-[100vh] font-sans text-xl bg-black grid place-items-center">
        <h2 className="animate-pulse text-center text-white text-stroke">
          Loading....
        </h2>
      </div>
    );
  } else {
    return (
      <main className="body__container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    );
  }
}
export default App;
