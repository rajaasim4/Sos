import React from "react";
import "./App.css";
import Home from "./Home/Home";

import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (
    <>
      <Home />

      <Analytics />
    </>
  );
};

export default App;
