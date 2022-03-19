import React from 'react';
//import './ApplicationWrapper.css';

export default function ApplicationWrapper() {

    return (
        <div className='h-screen snap-mandatory snap-y overflow-y-scroll bg-blue-50'>
            <div className='h-screen snap-center grid grid-cols-1 gap-4 content-center text-blue-900'>
                <h1 className="text-[128px] font-display flex justify-center">
                    weike qu
                </h1>
                <p className="font-body flex justify-center">
                    This is the body text
                </p>
            </div>
            <div className='h-screen snap-center'>
                <h1 className="text-[128px] font-display flex justify-center">
                    weike qu
                </h1>
                <p className="font-body">
                    This is the body text
                </p>
            </div>
        </div>
    )
}