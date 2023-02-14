import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "../pages/home"
import Navbar from "../components/navbar";
import PostList from "../components/post-list";
import Login from "../pages/login";

export default function AplicationRoutes () {
  return(
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suporte" element={<h1>Post</h1>} />
        <Route path="/login" element={<Login />} />

        </Routes>
        </BrowserRouter>
    )
} 