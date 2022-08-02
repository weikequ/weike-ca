import React from 'react';
import nameUnderlined from '../../media/name-underlined.svg';
import IconButton from '../other/IconButton.js'

export default function Navbar() {
    return (
            <div className='navbar'>
                <div>
                    <img alt='logo' src={nameUnderlined}></img>
                </div>
                <div className='icon-container'>
                        <IconButton type='liL' />
                        <IconButton type='ghL' />
                        <IconButton type='cvL' />
                </div>
            </div>
    )
}