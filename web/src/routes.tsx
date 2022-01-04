import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Simulator from "./pages/Simulator";

export default function PathRoutes() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>} />
                <Route path="/simulator" element= {<Simulator/>} />
            </Routes>
        </BrowserRouter>
  );
}