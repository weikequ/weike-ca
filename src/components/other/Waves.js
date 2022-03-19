import React from 'react';
import {ReactComponent as WaveSVG} from '../../media/waves.svg';
import './Waves.css';

export default function Waves() {

    return (
        <div className='content-end'>
            <div className='header flex'>
                <WaveSVG />
            </div>
        </div>
        
    )
}