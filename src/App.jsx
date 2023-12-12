import Navbar from "@/components/nav";
import { Outlet, Route, Routes } from "react-router-dom";
import { Footer, FooterMobile } from "./components/footer";
import { MainPage } from "./pages";
import Products from "./pages/products";
import ContactUs from "./pages/contact-us";
import Services from "./pages/services";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="products/*" element={<Products />} />
        <Route path="services/*" element={<Services />} />
        <Route path="contact-us/*" element={<ContactUs />} />
      </Routes>
      <Footer />
      <FooterMobile />
    </>
  );
}
