import React, {useEffect, useState} from 'react';
import axios from "axios";
import WarCards from "./WarCards";

function Main () {
const [wars, setWars] = useState([]);

useEffect(() => {
    axios.get(`https://swapi.co/api/people/`, {
        param: {}
    })



.then(Response => {
    const wars = Response.data.results;
    console.log("now what", wars);
    setWars(wars);
    
});
}, [])



return (
    <div>
        {wars.map(wars => {
            return (
             <WarCards
             name={wars.name}
             height={wars.height}
             mass={wars.mass}
             hairColor={wars.hair_color}
             skinColor={wars.skin_color}
             />   
            );
            })} 
    </div>
)

}
export default Main;