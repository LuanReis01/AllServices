import { Route, BrowserRouter, Routes } from "react-router-dom"

import Home from "../pages/home"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PostList from "../components/post-list";
import Login from "../pages/login";
import Advertise from "../pages/advertise";

import Container from "../components/container";


export default function AplicationRoutes () {
  return(
        <BrowserRouter>
        <Navbar />
        <Container customClass="min-height">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suporte" element={<h1>Post</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/advertise" element={<Advertise />} />

        </Routes>
        </Container>
        <Footer />
        </BrowserRouter>
    )
} 