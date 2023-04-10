import { React, useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    const [activeLink, setActiveLink] = useState('kippo');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
      }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    
    

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#tip-calculator" className={ activeLink === 'tip-calculator' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tip-calculator')}>Tip Calculator</Nav.Link>
            <Nav.Link href="#color-palette" className={ activeLink === 'color-palette' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('color-palette')}>Color Palettes</Nav.Link>
            <Nav.Link href="#counter" className={ activeLink === 'counter' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('counter')}>Counter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar
