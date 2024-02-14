import SpinnerClima from "./SpinnerClima";



const CardsClima = ({loadingDatos, infoDatos, clima}) => {

    if(loadingDatos){
        return 
        <SpinnerClima/>;

        
    }



    return (
        <h1></h1>
    );
};

export default CardsClima;