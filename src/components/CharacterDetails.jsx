import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import AcorddionDescription from './Acorddion';
// import ProgressStats from './ProgressStats';

const CharacterDetails = () => {

    const [detail, setDetail] = useState({});
    const [selected, setSelected]=useState(null);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setDetail(res.data));
    }, [])


    const i = 0;
    const toggle = ()=>{
        if(selected===i){
         return setSelected(null)
        }
        setSelected(i)
    }
    // function BarSet() {
    //   const now =70; 
    //       return ;


    //     // console.log(statsPokemon);
    // }
    // // }
    // console.log(BarSet())



    console.log(detail);

    return (
        <div className='cover-details'>

            <nav className='list-poke'>
                <h1>{detail.name}</h1>
                <h3 className='count'>Pokédex #{detail.id}</h3>
            </nav>

            <div className='info_detail_table'>
                <img style={{border:'3px solid slategray'}} src={detail.sprites?.other["official-artwork"].front_default} alt="" />

                <div className='hero_stats'>
                    <div style={{ display: 'flex' }}>
                        <img style={{ width: '60px', height: '60px' }} src={detail.sprites?.front_default} alt="" />
                        <p>{detail.types?.[0].type.name}</p>
                        <p>{detail.types?.[1].type.name}</p>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', border:'2px solid red', justifyContent: 'flex-start', alignItems: 'flex-start', lineHeight: '10px', width:'100%' }}>
                            <h2>Base / exp:</h2>
                            {detail.base_experience}
                        </div>
                        <div style={{ display: 'flex', border: '3px solid blue', width: '500px' }}>
                            <div>
                                <input type="text" value={detail.stats?.[0].base_stat} />
                                <input type="text" value={detail.stats?.[1].base_stat} />
                                <input type="text" value={detail.stats?.[2].base_stat} />
                                <input type="text" value={detail.stats?.[3].base_stat} />
                                <input type="text" value={detail.stats?.[4].base_stat} />
                                <input type="text" value={detail.stats?.[5].base_stat} />
                            </div>
                            <div>
                                <input type="text" value={detail.stats?.[0].stat.name} />
                                <input type="text" value={detail.stats?.[1].stat.name} />
                                <input type="text" value={detail.stats?.[2].stat.name} />
                                <input type="text" value={detail.stats?.[3].stat.name} />
                                <input type="text" value={detail.stats?.[4].stat.name} />
                                <input type="text" value={detail.stats?.[5].stat.name} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
                    <div >
                    <h2 onClick={()=>toggle(i)} style={{backgroundColor:'yellow'}}>Set movements:</h2>
                    <span>{selected ===i ? '>':'^'}</span>
                    </div>
                    <div className={selected===i?'content show': 'content'}>
                    {detail.moves?.slice(0,40).map((moves)=>(
                            <li>
                                {moves.move.name}
                            </li>
                    ))}
                   </div>
        </div>
    );
};

export default CharacterDetails;