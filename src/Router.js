import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
