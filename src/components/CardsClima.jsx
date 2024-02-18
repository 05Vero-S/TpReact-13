import "bootstrap/dist/css/bootstrap.min.css";
import ClimaSpinner from "./ClimaSpinner";
import Card from "react-bootstrap/Card";

const CardsClima = ({ loadingData, showData, weather }) => {
  if (loadingData) {
    return <ClimaSpinner></ClimaSpinner>;
  } 

  return (
    
     <div className=" mt-5">
      {showData === true? (
        <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
        
       : (<h2 className="text-dark text-center fs-1"> Sin datos disponibles </h2>)
        
      }
    </div>
    
  );
};

export default CardsClima;
