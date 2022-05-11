import React from 'react';
import ExpTile from '../other/ExpTile';

export default function ExperiencePage() {

    return (
        <div className='h-screen snap-center bg-blue-900 text-blue-50'>
            <div className='flex flex-col py-16'>
                <h2 className="py-4 sm:py-10 text-center">
                    Experiences
                </h2>
                <div className='flex flex-row w-[70vw] h-[75vh] place-self-center'>
                    <ExpTile type='ubc' />
                    <ExpTile type='seabc' />
                    <ExpTile type='cmolik' />
                    <ExpTile type='eq' />
                    <ExpTile type='ubc2' />
                </div>
            </div>
        </div>
    )
}
