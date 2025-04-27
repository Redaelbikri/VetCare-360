

import { Navbar, NavbarBrand, NavLink, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Exemple = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <NavbarBrand href="#home"></NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="./veterinerians">Liste de Veterinaires</NavLink>
                        <NavLink href="./titulaires">recherche de titulaire</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Exemple;
