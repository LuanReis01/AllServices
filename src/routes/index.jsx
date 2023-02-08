import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "../pages/home"
import Navbar from "../components/navbar";

export default function AplicationRoutes () {
  return(
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<h1>Post</h1>} />
        </Routes>
        </BrowserRouter>
    )
} 