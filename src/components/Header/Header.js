
import React from 'react';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';

const Header = (props) => {

    

    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fun Villa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/products">All</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Form inline onSubmit={(e) => {updateQuery(e)}}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => {setSearchByName(e.target.value); }} />
                <Button variant="outline-success" type="submit">Search</Button>
            </Form> */}
        </Navbar.Collapse>
    </Navbar>);
};


export default Header;