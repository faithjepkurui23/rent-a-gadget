import {Routes, Route} from "react-router-dom"
import Products from "./pages/products/Products.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"




import { Toaster } from "react-hot-toast"

export default function App() {
  return( 
    <main className="bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>  
      <Toaster />
    </main>
  )
}