import Nav from "./components/nav";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
