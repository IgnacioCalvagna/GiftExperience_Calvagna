import React, { useEffect, useState } from "react";
import Cats from "./Cats";

const FetchApi = () => {

const [pokemones,setPokemon] = useState([])


useEffect(() => {
  
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then( (response) =>response.json())
    .then((data)=>{
       
        setPokemon(data.results)
    })
    .catch(e=>console.log(e))
}, [])


const misPoke = pokemones.map((poke)=>{
  return(
    <>
      <div>
        <p><strong>Pokemon</strong>:{ poke.name}</p>
        <p>{poke.url}</p>
        <img src={poke.url} alt={poke.name} />
      </div>
    </>
  )
})

 
console.log("mis poke",pokemones)

  return( 
  <>
      
    {misPoke}
  </>
  );
};

export default FetchApi;



///// consumiendo de la api de catfact 