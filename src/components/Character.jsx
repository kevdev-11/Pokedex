import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import CharacterDetails from './CharacterDetails';
import SetCharacters from './SetCharacters';
import oak from '../assets/oak.png'

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
            <div className='wallpaper'>
                <div style={{display:'flex', justifyContent:'center', alignItems:'baseline', width:'700px'}}>
            <h1 style={{color:'yellow', textShadow: '0px 5px 5px rgba(0,0,0,0.7)', fontSize:'45px' }}>Trainer: {userName}{" "}</h1>
        <img style={{width:'180px',height:'180px', marginLeft:'300px'}}src={oak} alt="" />
                </div>
             <h2 style={{color:'white', textShadow: '0px 5px 5px rgba(0,0,0,0.7)'}}>Welcome to the Pokemon Universe </h2>
             <h2 style={{color:'orange', textShadow: '0px 5px 5px rgba(0,0,0,0.7)'}}>You can search any Pokemon from this pokedex </h2>
             <div className='arrow-set'></div>
             </div>

             <div className='input_searching'>
            <input 
            type="text" 
            style={{width:'80%', height:'100%', fontWeight:'bolder'}}
            placeholder='Search the pokemon' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)}/>

            <button 
            style={{height:'100%',width:'10%', color:'white', backgroundColor:'rgb(70, 73, 75)', border:'none', fontSize:'14px'}}
            onClick={searchingMode}>Search</button>

            <select 
            style={{height:'100%', width:'15%', color:'white', backgroundColor:'rgb(70, 73, 75)', border:'none', borderLeft:'0.5px solid white', textAlign:'center'}}
            placeholder='Select by type'
            // onChange={filterType}
            >
                <option style={{cursor:'pointer'}}>All poketype</option>
                {type?.map(types=>   
                <option 
                style={{width:'90px'}}
                value={types.name} 
                >{types.name}</option>
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
        <div style={{height:'200px', 
        backgroundColor:'#E6F3FA', 
        width:'100%', 
        display:'flex',
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center'}}>
            
            <div style={{margin:'10px', gap:'7px', display:'flex'}}>
            <button style={{border:'none',backgroundColor:'orangered', width:'80px', padding:'5px', marginLeft:'10px', textAlign:'center', fontSize:'22px', borderRadius:'10px', fontWeight:'700', color:'beige'}} 
            onClick={()=>setPaginate(paginate-1)}
            disabled={paginate===1}
            >
            
                Prev
            </button>
            {numbersToPages.slice(0, 20).map((buttons)=>
                <button style={{border:'none', backgroundColor:'#343968',height:'40px', width:'40px', padding:'5px', marginLeft:'10px', textAlign:'center', fontSize:'22px', borderRadius:'10px', fontWeight:'700', color:'beige'}} onClick={()=>setPaginate(buttons)}>{buttons}</button>
            )}
            <h1>
            ...
            </h1>
            </div>
            <div style={{gap:'7px', display:'flex'}}>
            {numbersToPages.slice(20,40).map((buttons)=>
                <button style={{border:'none', backgroundColor:'#343968', width:'40px', padding:'5px', marginLeft:'10px', textAlign:'center', fontSize:'22px', borderRadius:'10px', fontWeight:'700', color:'beige'}} onClick={()=>setPaginate(buttons)}>{buttons}</button>
            )}
            <button style={{border:'none',backgroundColor:'orangered', width:'80px',padding:'5px', marginLeft:'10px', textAlign:'center', fontSize:'22px', borderRadius:'10px', fontWeight:'700', color:'beige'}}
            onClick={()=>setPaginate(paginate+1)}
            >
                Next
            </button>
            </div>
            
        </div>
        
        </div>
    );
};

export default Character;