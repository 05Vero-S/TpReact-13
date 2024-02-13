import { useState } from "react";
import FormularioClima from "./FormularioClima";


const CuadroClima = () => {
    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=ff372c0ee7bcc4a849d4c8cf705127ba&lang=es";
    let ciudadUrl = "&q=";

    const [clima, setClima] = useState([]);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(false);
    const [ubicacion, setUbicacion] = useState("");

    const obtenerUbucacion = async(ubic) =>{
        setLoading(true);
        setUbicacion(ubic);

        urlClima = urlClima + ciudadUrl + ubic;

        await fetch(urlClima).then((response) =>{
            if(!response.ok) throw{response}
            return response.json();

        }).then((datosClima)=>{
            console.log(datosClima);
            setClima(datosClima);
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setInfo(false);
        })
    }


    return (
        
            <FormularioClima
            nuevaUbicacion = {obtenerUbucacion}
            
            />
        
    );
};

export default CuadroClima;