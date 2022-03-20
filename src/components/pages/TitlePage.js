import React from 'react';
import Waves from '../other/Waves.js';
import Scroll from '../other/Scroll.js'
import IconButton from '../other/IconButton.js'

export default function TitlePage() {
    return (
        <div className='h-screen flex flex-1 flex-col justify-between snap-center text-blue-900 bg-blue-50'>
            <div className='flex flex-1 flex-col gap-10'>
                <h1 className="text-[128px] font-display flex justify-center">
                    weike qu
                </h1>
                <div className='flex flex-row justify-center gap-3'>
                    <IconButton type='li' />
                    <IconButton type='gh' />
                    <IconButton type='cv' />
                </div>
                <Scroll />
            </div>
            <Waves />
        </div>
    )
}