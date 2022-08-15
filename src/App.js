import Nav from "./components/nav";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Adventuress from "./pages/adventuress";
import Adventurer from "./pages/adventurer";
import Cart from "./pages/cart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="adventuress" element={<Adventuress />} />
        <Route path="adventurer" element={<Adventurer />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
