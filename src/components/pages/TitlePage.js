import React from 'react';
import Waves from '../other/Waves.js';
import Scroll from '../other/Scroll.js'
import IconButton from '../other/IconButton.js'

export default function TitlePage() {
    return (
        <div className='h-screen flex flex-1 flex-col justify-between snap-center text-blue-900 bg-blue-50'>
            <div className='flex flex-1 flex-col justify-center gap-11'>
                <h1 className="flex justify-center">
                    weike qu
                </h1>
                <div className='flex flex-row justify-center gap-3'>
                    <IconButton type='li' />
                    <IconButton type='gh' />
                    <IconButton type='cv' />
                </div>
                <div className='flex justify-center'>
                <Scroll />
                </div>
                <p className="font-body flex justify-center">Let's work together</p>
            </div>
            <Waves />
        </div>
    )
}