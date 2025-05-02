import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import gardenLogo from './assets/gardenLogo.png'
import Form from 'react-bootstrap/Form';
import NavSearch from "./components/NavSearch";

export default function Root() {
    return (

        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="Logo"
                            src={gardenLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Gardening 101
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to={"/plants"} className="nav-link">Plants</Link>
                        <Link to='tipsandtricks' className="nav-link">Tips</Link>
                    </Nav>
                    <Form className="d-inline">
                        <NavSearch />
                    </Form>

                </Container>
            </Navbar>
            <Outlet />
        </>

    )
}