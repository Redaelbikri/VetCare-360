// import Image from 'next/Image';
import { Navbar, NavbarBrand, NavLink, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './OIP (1).jpeg';
const Exemple = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <NavbarBrand href="#home"></NavbarBrand>
                    <Nav className="me-auto">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#features">Features</NavLink>
                        <NavLink href="#pricing">Pricing</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>

    );
};

export default Exemple;
