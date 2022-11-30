import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SetCharacters = ( url ) => {

    const [poke, setPoke] = useState({});
    // const [ischange, setIsChange]=useState(true);


    useEffect(() => {
        axios.get(url)
            .then(res => setPoke(res.data));
    }, [])

    //    const replace = () =>{
    //        setChange(change)
    //        change = shiny;
    //    }

    // const getChange = () =>{
    //     setIsChange(ischange)
    // }
    
    // console.log(url);

    return (
        <div>
            <div className='cards'>
            <Link style={{textDecoration:'none', color:'white'}} to={`/character/${poke.id}`} key={poke.id} >
                <div className='pokename'>
                    <div><h1 style={{color:'gray', fontSize:'25px'}}>{poke.species?.name}</h1></div>
                    <div><h1 style={{color:'gray', fontSize:'25px'}}>N°{poke.id}</h1></div>
                </div>
        </Link>
                <div className='data-set-poke'>
                    <div >
                        <img className='sprites-card' src={poke.sprites?.front_default} alt="" />
                    </div>
                    {/* <button onClick={setIsChange(ischange ? poke.sprites?.front_shiny : poke.sprites?.front_default)}
                    >Shiny</button> */}
                    <div style={{fontSize:'17px', color:'#2f4f4f', fontWeight:'900'}}>
                        <span >Type:{" "}{poke.types?.[0]?.type?.name}</span>
                        {" "}<span style={{fontSize:'17px', color:'blue'}}>{poke.types?.[1]?.type?.name}</span>
                    </div>
                    <div>
                        <h4 style={{color:'gray'}}>Height:{" "}{poke.height}{" "}decimeters</h4>
                        <h4 style={{color:'gray'}}>Weight:{" "}{poke.weight}{" "}Hectograms</h4>
                    </div>
                </div>
            </div>
            <div>
        
            </div>
        </div>
    );
};



export default SetCharacters;