import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import foundball from '../assets/foundball.png';
import captured from '../assets/captured.png';

const SetCharacters = ({ url }) => {

    const [poke, setPoke] = useState({});
    // const [ischange, setIsChange]=useState(true);


    useEffect(() => {
        axios.get(url)
            .then(res => setPoke(res.data));
    }, [])

   


    console.log(poke);

    return (
        <div >
            <div style={{display:'flex', justifyContent:'center'}}>
            <img style={{rotate:'320deg', width:'110px', position:'relative', top:'33px', right:'71px', zIndex:'0', display:'flex'}} src={foundball} alt="" />
            </div>
            <div className='cards'>
            <Link style={{textDecoration:'none', color:'white'}} to={`/character/${poke.id}`} key={poke.id} >
                <div className='pokename'>
                    <div style={
                        {display:'flex'}
                    }>
                        <h1 
                        style={{color:'#2D3576', fontSize:'25px', marginLeft:'10px'}}>
                            {poke.species?.name}
                        </h1>
                        <img style={{width:'25px', height:'25px'}} src={captured} alt="" />
                        </div>
                    <div><h1 style={{color:'orangered', fontSize:'25px', marginRight:'10px'}}>N°{poke.id}</h1></div>
                </div>
        </Link>
                <div className='data-set-poke'>
                    <div >
                        <img className='sprites-card' src={poke.sprites?.front_default} alt="" />
                 {/* <img className='sprites-card' src={setIsChange? poke.sprites?.front_shiny : poke.sprites?.front_default}/> */}
                    </div>
                    {/* <button onClick={setIsChange(ischange ? poke.sprites?.front_shiny : poke.sprites?.front_default)}
                    >Shiny</button> */}
                    <div style={{fontSize:'17px', color:'#2f4f4f', fontWeight:'700', marginBottom:'20px'}}>
                        <span >Type:{" "}{poke.types?.[0]?.type?.name}</span>
                        {" "}<span style={{fontSize:'17px', color:'blue'}}>{poke.types?.[1]?.type?.name}</span>
                    </div>
                    <div>
                        <h4  style={{color:'gray', fontSize:'20px'}}>H:{" "}{poke.height}{" "}decimeters</h4>
                        <h4 style={{color:'gray', fontSize:'20px'}}>W:{" "}{poke.weight}{" "}hectograms</h4>
                    </div>
                    {/* <button onClick={(e)=>setIsChange(e.target.value)  value={ischange}>shiny version</button> */}
                </div>
            </div>
            
        </div>
    );
};



export default SetCharacters;