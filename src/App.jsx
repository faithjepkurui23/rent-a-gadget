import { Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products.jsx";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import ReturnPolicy from "./pages/ReturnPolicy.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Orders from "./pages/Orders.jsx";
import Navbar from "./components/Navbar.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

export default function App() {
  return (
    <main className="bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsConditions/>} />
        <Route path="/return" element={<ReturnPolicy/>} />

      </Routes>

      <Toaster />
    </main>
  );
}