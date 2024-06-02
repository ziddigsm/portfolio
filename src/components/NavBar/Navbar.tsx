import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {DarkModeToggle} from "../DarkMode/DarkMode";
import { useThemeContext } from "../../context/ThemeContext";

function NavbarCompo() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) 
  theme = "dark";
    return (
        <div>
        <Navbar bg = {theme} variant={theme} expand="lg" className="mr-sm-6">
      <Container fluid>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#action1" disabled>Education</Nav.Link>
            <Nav.Link href="#action2" disabled>Experience</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown" disabled>
              <NavDropdown.Item href="#action3">BardTales</NavDropdown.Item>
              <NavDropdown.Item href="#action4" disabled>
                IBM Watson - Chatbot
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Skills & Certifications" id="navbarScrollingDropdownSC" disabled>
            <NavDropdown.Item href="#action6">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Certifications</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
            <Nav.Link href="#" >
            <DarkModeToggle />
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              disabled
            />
            <Button variant="outline-success" disabled>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    )
}

export default NavbarCompo;