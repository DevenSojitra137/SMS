import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';


function NavBar() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <div className='d-flex align-items-center'> 
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Dashboard</Accordion.Header>
                                        <Accordion.Body>

                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Navbar.Offcanvas>
                            <div className='d-flex'>
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                            </div>
                        </div>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default NavBar;