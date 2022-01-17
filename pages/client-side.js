import axios from "axios"

import { useState, useEffect } from "react"


const url = "https://pokeapi.co/api/v2/pokemon"

const ClientSide =() => {
    const [pokemon, setPokemon] = useState([]);
    useEffect (()=>{
    const fetchPokemoen = async () =>{
        const response = await axios.get(url);
        //console.log(response);
        const promises = []
        response.data.results.forEach(result=>{
            promises.push(axios.get(result.url))
        });
        const responses = await Promise.all(promises);

        //console.log(responses);

        const pokeData = responses.map(r=>{
            return {
                name : r.data.name,
                imgUrl : r.data.sprites.front_default
            }
        })

        //console.log(pokeData)

        setPokemon(pokeData);
    };

    fetchPokemoen();
    
    },[]);
    //console.log(pokemon)
  
    return pokemon.map((r) =>{
       return (
        <div> 
            <img src={ r.imgUrl } /> 
            <p>{r.name}</p>
            <hr />
        </div>

       
            
       ) 
    })
    
  }
  
  export default ClientSide