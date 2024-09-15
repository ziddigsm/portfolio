import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { DarkModeToggle } from "../DarkMode/DarkMode";
import { useThemeContext } from "../../context/ThemeContext";

function NavbarCompo() {
  let theme: string = "light";
  const themeProps = useThemeContext();
  if (themeProps.theme === true) theme = "dark";
  return (
    <div>
      <Navbar bg={theme} variant={theme} expand="lg" className=" mr-sm-6 navbar-nav">
        <Container fluid>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#Education">Education</Nav.Link>
              <Nav.Link href="#Experience">
                Experience
              </Nav.Link>
              <Nav.Link href="#Awards">Awards</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              <Nav.Link href="#Skills">
              Skills & Certifications
              </Nav.Link>
              <Nav.Link href="#Contact">
                Contact
              </Nav.Link>
              <Nav.Link href="#">
                <DarkModeToggle />
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCompo;
