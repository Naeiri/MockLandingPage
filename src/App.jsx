import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import CakeShopLogo from './assets/logo/chloezee-cakes-shop-logo.png';
import Pages from './component/pages';

function App() {
  return (
    <div className='App'>
      <Navbar expand="lg" className='custom-width'>
        <Container className="justify-content-between">
          {/* Logo aligned to the left on smaller screens */}
          <Navbar.Brand as={Link} to="/" className="d-lg-none">
            <img
              src={CakeShopLogo}
              alt="Chloezee Cake Shop Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              {/* Centered Logo on larger screens */}
              <Navbar.Brand as={Link} to="/" className="mx-3 d-none d-lg-block">
                <img
                  src={CakeShopLogo}
                  alt="Chloezee Cake Shop Logo"
                  className="logo"
                />
              </Navbar.Brand>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/menu" element={<Pages.OurMenu />} />
        <Route path="/menu/custom-cakes" element={<Pages.CustomCakes />} />
        <Route path="/menu/cupcakes" element={<Pages.Cupcakes />} />
        <Route path="/menu/specialty-cakes" element={<Pages.SpecialtyCakes />} />
        <Route path="/about" element={<Pages.AboutUs />} />
        <Route path="/contact" element={<Pages.Contact />} />
      </Routes>
    </div>
  );
}

export default App;