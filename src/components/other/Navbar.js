import React from 'react';
import nameUnderlined from '../../media/name-underlined.svg';
import IconButton from '../other/IconButton.js'

export default function Navbar() {

    return (
        <div>
            <div className='flex flex-row p-4'>
                <div className='basis-1/2 font-display text-[24px] pl-60'>
                    <img src={nameUnderlined}></img>
                </div>
                <div className='basis-1/2 flex flex-row justify-end gap-3 pr-60'>
                    <IconButton type='liL' />
                    <IconButton type='ghL' />
                    <IconButton type='cvL' />
                </div>
            </div>
        </div>
    )
}