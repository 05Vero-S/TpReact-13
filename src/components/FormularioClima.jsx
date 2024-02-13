import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


const FormularioClima = ({nuevaUbicacion}) => {
    const [ciudad, setCiudad] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log({ciudad});
        if(ciudad === "" || !ciudad) return;

        nuevaUbicacion(ciudad);
    }



    return (
        <div>
            <Form className='mx-auto container mt-5' onSubmit={onSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
        <Form.Label className='text-light'>Ingrese:</Form.Label>
        <Form.Control type="text" placeholder="Ciudad/País" className='ms-2' onChange={(e)=>setCiudad(e.target.value)} />
        <Button variant="warning" type='submit' className='ms-2'>Buscar</Button>
      </Form.Group>
      
    </Form>
        </div>
    );
};

export default FormularioClima;