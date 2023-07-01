import React from "react";
import { Navbar,NavDropdown, Nav, Container } from "react-bootstrap";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{display: "flex", justifyContent: "center",}}>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
          
              <Nav.Link href="#home" style={{paddingRight: 100, }}>Counter</Nav.Link>
              <Nav.Link href="#link" style={{paddingLeft: 15}}>Clock</Nav.Link>
              <Nav.Link href="#link" style={{paddingLeft: 100}}>Container</Nav.Link>
        </div>
      </Navbar>
    )
}
export default Header;