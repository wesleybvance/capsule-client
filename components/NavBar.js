/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand className="logo-title">capsule ❊☆✴︎</Navbar.Brand>
        </Link>
        <div className="rflex center">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
              <Link passHref href="/">
                <Nav.Link className="nav-link">home</Nav.Link>
              </Link>
              <Link passHref href="/closet">
                <Nav.Link className="nav-link">closet</Nav.Link>
              </Link>
              <Link passHref href="/outfits/new">
                <Nav.Link className="nav-link">dress me</Nav.Link>
              </Link>
              <Link passHref href="/items/new">
                <Nav.Link className="nav-link">add item</Nav.Link>
              </Link>
              <Link passHref href="/outfits/all">
                <Nav.Link className="nav-link">outfits</Nav.Link>
              </Link>
              <Button variant="danger" className="nav-link" onClick={signOut}>
                log off
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
