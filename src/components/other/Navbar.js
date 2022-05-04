import React from 'react';
import nameUnderlined from '../../media/name-underlined.svg';
import IconButton from '../other/IconButton.js'

export default function Navbar() {

    return (
        <div>
            <div className='flex flex-row p-4'>
                <div className='basis-full font-display text-[24px] pl-[10%]'>
                    <img className='min-w-[4.75em]' alt='logo' src={nameUnderlined}></img>
                </div>
                <div className='basis-full pr-[10%]'>
                    <div className=' min-w-[8em] flex flex-row justify-end gap-3'>
                        <IconButton type='liL' />
                        <IconButton type='ghL' />
                        <IconButton type='cvL' />
                    </div>
                </div>
            </div>
        </div>
    )
}