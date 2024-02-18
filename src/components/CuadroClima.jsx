import { useState } from "react";
import FormularioClima from "./FormularioClima";
import CardsClima from "./CardsClima";


const CuadroClima = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=ff372c0ee7bcc4a849d4c8cf705127ba&lang=es";
    let cityUrl = "&q=";

    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw{response}
            return response.json();

        }).then((weatherData)=>{
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }


    return (
        <>
        <FormularioClima
            newLocation = {getLocation}
            
            />

            <CardsClima
            showData = {show}
            loadingData = {loading}
            weather = {weather}
            
            
            />
        </>
            
        
    );
};

export default CuadroClima;