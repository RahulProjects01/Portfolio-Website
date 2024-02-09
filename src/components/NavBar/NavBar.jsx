import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar expand="lg" className=" text-white kkr navbar-page">
            <Container >
                <Navbar.Brand href="#home" className='text-white portfolio'>PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto  link-bar">
                        <Nav.Link href="#home" className='text-secondary a'>Home</Nav.Link>
                        <Nav.Link href="#projects" className='text-secondary a'>Projects</Nav.Link>
                        <Nav.Link href="#experience" className='text-secondary a'>Experience</Nav.Link>
                        <Nav.Link href="#education" className='text-secondary a'>Education</Nav.Link>
                    </Nav>
                    <div className='git-btn'> <Nav.Link href="https://github.com/RahulProjects01">Git Hub</Nav.Link></div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;