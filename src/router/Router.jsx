import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../screens/Index/Index";

export default function RouterPage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}
