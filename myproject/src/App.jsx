import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Onelinenav from "./components/Onelinenav";
import Loader from "./Loader/Loader";
import AllRoutes from "./AllRoutes";

// 🔥 HOC Wrapper Function
function HocColorWrapper(props) {
  const colors = ["#ff6666", "#66b3ff", "#99ff99", "#ffff66", "#ffb366"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div style={{ backgroundColor: randomColor }}>
      <props.cmp />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Navbar />
      <HocColorWrapper cmp={Onelinenav} />
      <AllRoutes />
      </>
  );
}

export default App; 
