import React from 'react';
import Waves from '../other/Waves.js';
import Scroll from '../other/Scroll.js'
import IconButton from '../other/IconButton.js'

export default function TitlePage() {
    return (
        <div className='title-page'>
            <div className='container'>
                <h1>
                    weike qu
                </h1>
                <div className='icon-buttons'>
                    <IconButton type='li' />
                    <IconButton type='gh' />
                    <IconButton type='cv' />
                </div>
                <div>
                    <Scroll />
                </div>
                <p>Let's work together</p>
            </div>
            <Waves />
        </div>
    )
}