import React, { useState } from 'react';
import icon from '../assets/icon.png';
import lyricsGo from '../assets/lyricsGo.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokemon.slice';
import pokeballmoving from '../assets/pokeballmoving.gif';

import lettingo from '../assets/lettingo.png';


const Home = () => {

    const [enter, setEnter] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const callHandler = () => {
        navigate("/character");
        dispatch(changeName(enter))
    }

    // console.log(enter);
    return (

        <div className='cover'>

            <div>
                {/* <img className='poketraineer' src={traineer} alt="" /> */}

                <img className='poketraineer' src={lettingo} alt="" />
            </div>
            {/* <div>
                <img src={pokeballmoving} alt="" />
            </div> */}
            <div style={{marginTop:'-80px' }}>
            <img style={{ width: '630px', height: '230px' }} src={lyricsGo} alt="" />
            <h1 style={{fontSize:'60px', fontWeight:'bold', color:'yellow',textShadow: '0px 5px 5px rgba(0,0,0,0.7)' }}>Pokemon Trainer !</h1>
            <h1 style={{textShadow: '0px 5px 5px rgba(0,0,0,0.7)', color:'white'}}>Are you ready to explore the pokedex?</h1>
            </div>      
            <div className='get-name'>

                <input
                    style={{ width: '300px', 
                    height: '30px', 
                    borderRadius: '10px', 
                    border: '1px solid black', 
                    padding:'15px', 
                    margin:'-30px', 
                    textAlign:'center', 
                    fontWeight:'900', 
                    fontFamily:'sans-serif'}}
                    className='putyouname'
                    type="text"
                    placeholder='your trainer name here! =D'
                    value={enter}
                    onChange={(e) => setEnter(e.target.value)} />

                <button onClick={callHandler}><img style={{ width: '30px', height: '30px' }} src={icon} alt="" /></button>
            </div>
            <div>
                <img style={{width:'130px'}} src={pokeballmoving} alt="" />
            </div> 

        </div>
    );
};

export default Home;