import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'


import {
  Home, Contact, FAQ,
  Blog, Privacy, Productdetail,
  Productpage
} from "./pages"



export default function App() {

  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/blog" element={<Blog />} />  */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/product-detail" element={<Productdetail />} />
        <Route path="/all-product" element={<Productpage />} />
      </Routes>
    </main>
  )
}