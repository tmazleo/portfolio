import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/pages/Skills";

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Porjects";

function App() {
  return (

      <Router>
        <Header />
        <Container customClass="minheight">
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </Container>
        <Footer />
      </Router>


  )
}

export default App;
