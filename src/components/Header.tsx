import * as React from "react";
import { Navbar, Container } from "react-bootstrap";
import notes from "../assets/notes.png";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="flex jcc aic">
          <img
            alt="logo"
            src={notes}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="logo-title">Notes App</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
