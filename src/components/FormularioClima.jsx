import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const FormularioClima = () => {
    return (
        <div>
            <Form className='mx-auto container mt-5'>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-light'>Ingrese:</Form.Label>
        <Form.Control type="text" placeholder="Ciudad/País" className='ms-2' />
        <Button variant="warning" type='submit' className='ms-2'>Buscar</Button>
      </Form.Group>
      
    </Form>
        </div>
    );
};

export default FormularioClima;