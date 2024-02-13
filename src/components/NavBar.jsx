import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar className="bg-dark py-3">
        <Container>
          <Navbar.Brand className='text-light mx-auto fs-2'>El Tiempo</Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default NavBar;