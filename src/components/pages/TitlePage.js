import React from 'react';
import Waves from '../other/Waves.js';


export default function TitlePage() {

    return (
        <div className='h-screen flex flex-1 flex-col justify-between snap-center text-blue-900 bg-blue-50'>
            <div className='content-center'>
                <h1 className="text-[128px] font-display flex justify-center">
                    weike qu
                </h1>
                <span>

                </span>
                <p className="font-body flex justify-center">
                    This is the body text
                </p>
            </div>
            <Waves />
        </div>
    )
}