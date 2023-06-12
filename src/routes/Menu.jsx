import { Navbar, Nav, Form, Container, Button } from 'react-bootstrap';
import logo from './headphone.png';
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
export default function Menu() {
  return (
    <Fragment>
      <Navbar bg="light" className='border-bottom'  expand="xl">
        <Container >
          <Navbar.Brand href="#" >
            <img src={logo} className="App-logo img-fluid" alt="logo" /> MAKÜ MUSİC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white text-danger' />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto  my-lg-0 text-uppercase ">

              <Nav.Link href="/" className='fw-bold'>Müzik</Nav.Link>
              <Nav.Link href="/Podcast" className='fw-bold' >Podcast'ler</Nav.Link>
              <Nav.Link href="/Favori" className='fw-bold' >Favoriler</Nav.Link>
              <Nav.Link href='/Uyelik' className='fw-bold'>Üyelik</Nav.Link>
              <Nav.Link href='/sign-in' className='fw-bold'>Giriş Yap</Nav.Link>



            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Müzikleri Ara"
                className="me-2  "
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </Fragment>
  );
}
