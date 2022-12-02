import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import closeball from '../assets/closeball.png';
import openball from '../assets/openball.png'
// import arrowFunk from '../assets/arrowFunk.png'
import ProgressBars from './ProgressBars';
import pokeballmoving from '../assets/pokeballmoving.gif';
import exit from '../assets/exit.webp';

const CharacterDetails = () => {


    const [detail, setDetail] = useState({});
    const [selected, setSelected] = useState(null);
    const [core, setCore] = useState(null);

    const { id } = useParams(); 


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setDetail(res.data));


        // axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
        // .then(res=>setEvolve(res.data));
    }, [])


    console.log(detail);

    // const colorByType = {
    //     red: 'fire',//agregados a las cartas usando div> {evolve.color.name ==='red' ? setColors.red : othercolor}
    //     blue: 'water',
    //     green: 
    // }

    // console.log(setColors);

    
    // console.log(detail.types[1].type.name)

    const i = 0;
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    // function BarSet() {
    //   const now =70; 
    //       return ;
    const j = 0;
    const handler = (j) => {
        if (core === j) {
            return setCore(null)
        }
        setCore(j)
    }


    return (
        <div className='cover-details'>
            <Link to={'/character'}>
                <img style={{width:'40px', position:'absolute', left:'50px', top:'20px'}}src={exit} alt="" />
            </Link>
            <nav className='list-poke' style={{border:'1px solid black solid black'}}>
                <div style={{ display: 'flex' }}>
                
                    <div className='count'>
                    <div><img style={{width:'40px', height:'40px' }} src={pokeballmoving} alt="" /></div>
                        <h1 style={{fontSize:'35px'}}>
                        Pokédex #{detail.id}
                            </h1>
                           
                            <div><img style={{width:'40px', height:'40px' }} src={pokeballmoving} alt="" /></div>
                            
                            </div>
                </div>
                <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
                <div className='abilities-table'>
                 <div style={{display:'flex' , width:'100%', justifyContent:'space-evenly', alignItems:'baseline'}}>
                 <h2 style={{fontSize:'24px', color:'slategray'}}>Ability 1:</h2>
                      <div style={{width:'50%'}}> 
                        <h3 style={{fontSize:'20px', fontWeight:'700', color:'whitesmoke'}}>

                        {detail.abilities?.[0]?.ability.name.toUpperCase()} 
                        </h3>
                        </div>
                    </div>
                    <div style={{display:'flex' , width:'100%', justifyContent:'space-evenly', alignItems:'baseline'}}>
                 <h2 style={{fontSize:'24px', color:'orange'}}>Ability 2:</h2>
                      <div style={{width:'50%'}}> 
                        <h3 style={{fontSize:'20px', fontWeight:'700', color:'whitesmoke'}}>
                        {detail.abilities?.[1]?.ability.name.toUpperCase()}
                            </h3> 
                        </div>
                    </div>
                     
        </div>
                <div style={{
                    width: 'auto',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '10px',
                    position: 'relative',
                    left: '0'
                }}>
                    <div style={{
                      
                        display: 'flex',
                        height: '100%',
                        width: '260px',
                        alignItems:'center',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h1 style={{fontSize:'24px', fontWeight:'700', color: 'whitesmoke'}}>Type(s):</h1>
                        </div>
                        <div >
                            <h2 style={{ fontSize: '20px', fontWeight: '900', backgroundColor:'orange', color:'black', width:'75px', height:'55px', borderRadius:'50%', display:'flex', justifyContent:'center', alignItems:'center' }}>
                                {detail.types?.[0]?.type.name}
                            </h2>
                        </div>
                        <div> 
                           
                           <h2 className='types'>
                           {detail.types?.[1]?.type.name}
                            </h2>
                    </div>
                    </div>
                    <h1 style={{ 
                    color: 'black', 
                    fontSize:'32px', 
                    fontWeight:'bolder', 
                    height:'100%',
                display:'flex',
            alignItems:'center' }}
                    >{detail.name}</h1>
                    <img style={{ width: '70px', height: '70px', backgroundColor:'rgb(195,178,144)', borderRadius:'50%'}}
                        src={detail.sprites?.front_default} alt="" />
                </div>
                </div>
            </nav>

            <div className='info_detail_table'>
                <img src={detail.sprites?.other["official-artwork"].front_default} alt="" />
                <div className='hero_stats'>

                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div onClick={() => toggle(i)}
                            style={{
                                backgroundColor: '#dd5c16',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                lineHeight: '10px',
                                width: '100%',
                                height: '11vh'
                            }}>
                            <div className='detail-triangle-left'></div>
                            <div style={{ display: 'flex', flexDirection: 'column', padding: '5px', width: '100%', height: '100%' }}>
                                <div style={{ width: '100%', height: '50%' }}>
                                    <div style={{ width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                        <h3 style={{ borderBottom: '3px solid white', height: '100%', fontSize: '22px', width:'100%', color:'black', fontWeight:'bold' }}>Experience base</h3>
                                        <hr />
                                        <div>
                                            <h4 style={{ width: 'fit-content', height: 'fit-content', fontSize: '25px' }}>{detail.base_experience} </h4>

                                        </div>
                                    </div>
                                </div>
                                <div style={{ borderTop: '1px solid black solid white', display: 'flex', justifyContent: 'flex-end', height: '50%' }}>
                                    <div style={{
                                        border: '0.5px solid black',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        marginTop: '3px',
                                        borderRadius: '5px',
                                        backgroundColor: '#a4d0db',
                                        padding: '5px',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <h5>Stats base</h5>
                                        {selected === i ?
                                            <img style={{ width: '30px', height: '30px' }} src={openball} alt="" /> :
                                            <img style={{ width: '30px', height: '30px' }} src={closeball} alt="" />}
                                    </div>
                                </div>
                            </div>
                            <div className='detail-triangle-right'></div>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                           
                            <ProgressBars detail={detail}></ProgressBars>
                       
                        </div>
                        {/* <span style={{ border: '3px solid blueviolet', padding: '20px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ borderRadius: '50%', width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
                            <div><img style={{ width: '120px', height: '75px' }} src={arrowFunk} alt="" /></div>
                            <div style={{ borderRadius: '50%', width: '130px', height: '130px', backgroundColor: 'blueviolet' }}></div>
                        </span> */}
                    </div>
                </div>

            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => toggle(i)} style={{ 
                backgroundColor: 'orangered', color:'black', 
                borderRadius:'12px', 
                border:'1px solid black', 
                marginBottom:'10px',
            fontWeight:'bolder' }} value={selected}
                >First moves package{selected === i ?
                    <img style={{ width: '30px', height: '30px' }} src={openball} alt="" /> :
                    <img style={{ width: '30px', height: '30px' }} src={closeball} alt="" />
                    }</button>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
                <div>
                    {detail.moves?.slice(0, 10).map((moves) => (

                        <li className='dropdown'>
                            {moves.move.name}
                        </li>

                    ))}
                </div>
                <div>
                    {detail.moves?.slice(10, 20).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(20, 30).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(30, 40).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(40, 50).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(50, 60).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>

{/* Al ser un arreglo tan grande la cantidad de movimientos lo decidí hacer en 2 paquetes (una primera la antes realizada y la que viene) */}

            </div>
<div style={{ display: 'flex'}}>
                <button onClick={() => handler(j)} style={{ 
                    backgroundColor: 'orange', 
                    borderRadius:'12px', 
                    border:'1px solid black',
                    fontWeight:'bolder' }} value={selected}
                >Second moves package{core === j ?
                    <img style={{ width: '30px', height: '30px' }} src={openball} alt="" /> :
                    <img style={{ width: '30px', height: '30px' }} src={closeball} alt="" />
                    }</button>
            </div>
            <div className={core === j ? 'content show' : 'content'}>
            <div>
                    {detail.moves?.slice(60, 70).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(70, 80).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(80, 90).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(90, 100).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(100, 110).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                <div>
                    {detail.moves?.slice(110, 120).map((moves) =>

                        <li className='dropdown' style={{}}>
                            {moves.move.name}
                        </li>

                    )}
                </div>
                </div>
        </div>

    );
};

export default CharacterDetails;