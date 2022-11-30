import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SetCharacters from './SetCharacters';

const Character = () => {

    const [character, setCharacter] = useState([]);
    const [type, setType]=useState([]);
    const userName = useSelector(state =>state.pokemon);

    const [search, setSearch]=useState("");

    const navigate = useNavigate();
    
    const searchingMode=()=>{
        navigate(`/character/${search.toLowerCase()}`)        
    };

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000&offset=0')
        .then(res=>setCharacter(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res=>setType(res.data.results));
    },[]);

    // const filterType=(e)=>{
    //     const url = e.target.value;
    //     axios.get(url)
    //     .then(res=>setCharacter(res.data.results.map((pokemon)=>(pokemon))))   
    // };
    

    const [paginate, setPaginate] = useState(1);

    const pokesPerPages = 25;
    const lastIndex = paginate*pokesPerPages;
    const firstIndex = lastIndex-pokesPerPages;
    const pokemonPaginated = character.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(character.length / pokesPerPages);

    const numbersToPages = [];

    for(let i=1; i<totalPages;i++){
        numbersToPages.push(i);
    }

    // console.log(numbersToPages)

    // console.log(pokemonPaginated);
    // console.log(character);
    // console.log(type)

    return (
        <div className='pokedex-container'>
            <h1>Personajes</h1>
             <h2>welcome to the universe pokemon {userName}</h2>
             <div className='input_searching'>
            <input 
            type="text" 
            style={{width:'70%', height:'90%'}}
            placeholder='Search the pokemon' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>

            <button 
            style={{height:'100%',width:'10%', color:'white', backgroundColor:'rgb(70, 73, 75)', border:'none'}}
            onClick={searchingMode}>search</button>

            <select 
            style={{height:'100%', width:'10%', color:'white', backgroundColor:'rgb(70, 73, 75)', border:'none', borderLeft:'0.5px solid white'}}
            placeholder='Select by type'
            // onChange={filterType}
            >
                <option>button</option>
                {type.map(types=>   
                <option 
                style={{width:'90px'}}
                value={types.name} 
                key={types.name}>{types.name}</option>
            )}
            </select>
            </div>
        <div className='pokecards'>
            
            {pokemonPaginated.map((pokemon)=>(
           
                <ul  key={pokemon.url}>
                    <SetCharacters  
                    url={pokemon.url }
                    key={pokemon.url }/>
                {/* <li key={character.url}>{character.url}</li> */}
                </ul>

            ))}
        </div>
        <div >
            <button  
            onClick={()=>setPaginate(paginate-1)}
            disabled={paginate===1}
            >
            
                Prev
            </button>
            {numbersToPages.slice(0,10).map((buttons)=>
                <button onClick={()=>setPaginate(buttons)}>{buttons}</button>
            )}...
            {numbersToPages.slice(10,50).map((buttons)=>
                <button onClick={()=>setPaginate(buttons)}>{buttons}</button>
            )}
            <button 
            onClick={()=>setPaginate(paginate+1)}
            >
                Next
            </button>
        </div>
        </div>
    );
};

export default Character;