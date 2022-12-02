import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProgressBars = ({ detail }) => {

    console.log(typeof (detail.stats?.[0].base_stat));

    const number = detail.stats?.[0].base_stat;
    const per = 100;
    const percentege = (number, per) => {
        return number / 100 * per;
    }

    console.log(percentege(number, per));

    return (

        <div className='contain_progress'>
            <span>{detail.stats?.[0].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-primary progress-bar-animated'
                    role='progressbar'
                    style={{ border: '2px solid black', minWidth: detail.stats?.[0].base_stat ? detail.stats?.[0].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[0].base_stat ? detail.stats?.[0].base_stat : '100%'}
                </div>
            </div>
            <span>{detail.stats?.[1].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-danger progress-bar-animated'
                    role='progressbar'
                    style={{ border: '2px solid black', minWidth: detail.stats?.[1].base_stat ? detail.stats?.[1].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[1].base_stat ? detail.stats?.[1].base_stat : '100%'}
                </div>
            </div>
            <span>{detail.stats?.[2].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-success progress-bar-animated'
                    role='progressbar'
                    style={{ border: '2px solid black', minWidth: detail.stats?.[2].base_stat ? detail.stats?.[2].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[2].base_stat ? detail.stats?.[2].base_stat : '100%'}
                </div>
            </div>
            <span>{detail.stats?.[3].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-danger progress-bar-animated'
                    role='progressbar'
                    style={{ border: '2px solid black', minWidth: detail.stats?.[3].base_stat ? detail.stats?.[3].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[3].base_stat ? detail.stats?.[3].base_stat : '100%'}
                </div>
            </div>
            <span>{detail.stats?.[4].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-success progress-bar-animated'
                    role='progressbar'
                    style={{ border: '2px solid black', minWidth: detail.stats?.[4].base_stat ? detail.stats?.[4].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[4].base_stat ? detail.stats?.[4].base_stat : '100%'}
                </div>
            </div>
            <span>{detail.stats?.[5].stat.name}</span>
            <div className='progress'>
                <div className='progress-bar bg-warning progress-bar-animated'
                    role='progressbar'
                    style={{ border: '1px solid yellow', minWidth: detail.stats?.[5].base_stat ? detail.stats?.[5].base_stat / 100 * 400 : '100%' }}
                >
                    {detail.stats?.[5].base_stat ? detail.stats?.[5].base_stat : '100%'}
                </div>
            </div>
        </div>
    );
}

export default ProgressBars;