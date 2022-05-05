import React from 'react';
import nameUnderlined from '../../media/name-underlined.svg';
import IconButton from '../other/IconButton.js'

export default function Navbar() {
    return (
        <div>
            <div className='h-14 md:h-16 flex flex-row p-4'>
                <div className='basis-full flex flex-row justify-center'>
                    <img className='h-full' alt='logo' src={nameUnderlined}></img>
                </div>
                <div className='basis-full flex flex-row justify-center gap-3'>
                        <IconButton size='h-full' type='liL' />
                        <IconButton size='h-full' type='ghL' />
                        <IconButton size='h-full' type='cvL' />
                </div>
            </div>
        </div>
    )
}