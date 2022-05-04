import React from 'react';
import Navbar from '../other/Navbar.js';
import profile from '../../media/profile.svg'


export default function AboutPage() {

    return (
        <div className='h-screen snap-center bg-blue-900 text-blue-50'>
            <Navbar />
            <div className='flex flex-wrap-reverse'>
                <div className='flex-[1_1_20em] p-[5%]'>
                    <div className='max-w-[32em] md:max-h-[100vh] max-h-[40vh]'>
                        <h1 className="text-[64px] font-display flex justify-center pb-10">
                        Welcome! It's good to see you!
                        </h1>
                        <p className="font-body">
                            My name is Weike (pronounced wake) and I am a passionately curious engineer.
                            <br />
                            <br />
                            In a previous life, I was a professional structural engineer, designing cutting edge and architecturally expressive buildings. Now, I'm bringing my past design and leadership excellence into building amazing things in a virtual space. 
                        </p>
                    </div>
                </div>
                <div className='flex-[1_1_20em] p-[5%]'>
                    <div className=''>
                        <img className='max-w-[32em] md:max-h-[100vh] max-h-[40vh]' alt='Profile' src={profile}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}