import React from 'react';
import Waves from '../other/Waves.js';
import {ReactComponent as LISVG} from '../../media/li.svg';
import {ReactComponent as GHSVG} from '../../media/gh.svg';
import {ReactComponent as CVSVG} from '../../media/cv.svg';

export default function TitlePage() {

    return (
        <div className='h-screen flex flex-1 flex-col justify-between snap-center text-blue-900 bg-blue-50'>
            <div className='content-center flex flex-1 flex-col gap-10'>
                <h1 className="text-[128px] font-display flex justify-center">
                    weike qu
                </h1>
                <div className='flex flex-row justify-center gap-3'>
                    <LISVG />
                    <GHSVG />
                    <CVSVG />
                </div>
                <p className="font-body flex justify-center">
                    This is the body text
                </p>
            </div>
            <Waves />
        </div>
    )
}