import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Logo, Nav, Center, Link } from "./style";

const Header = () => {
  return (
    <React.Fragment>
      <Container>
        <Center>
          <Logo>Auth App</Logo>
          <Nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/signin"}>Sign In</Link>
          </Nav>
        </Center>
      </Container>
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
