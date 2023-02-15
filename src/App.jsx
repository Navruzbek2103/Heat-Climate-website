import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Brends from "./pages/Brends";
import Products from "./pages/Products";
import Service from "./pages/Service";
import News from "./pages/News";
import Contact from "./pages/Contact";
import SinglePage from "./pages/SinglePage";


const App = ( ) => {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Бренды" element={<Brends />} />
        <Route path="/Продукты" element={<Products />} />
        <Route path="/Сервисная-служба" element={<Service />} />
        <Route path="/Новости" element={<News />} />
        <Route path="/Контакты" element={<Contact />} />
        <Route path=":cardTitle/" element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
