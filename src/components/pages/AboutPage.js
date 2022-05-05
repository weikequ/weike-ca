import React from 'react';
import Navbar from '../other/Navbar.js';
import profile from '../../media/profile.svg'


export default function AboutPage() {

    return (
        <div className='h-screen snap-center bg-blue-900 text-blue-50'>
            <Navbar />
            <div className='md:flex'>
                <div className='md:order-2 md:basis-full flex justify-center'>
                    <img className='h-[40vh]' alt='Profile' src={profile} />
                </div>
                <div className='md:order-1 md:basis-full'>
                    <div className=''>
                        <h2 className="pb-10">
                        Welcome! It's good to see you!
                        </h2>
                        <p className="font-body">
                            My name is Weike (pronounced wake) and I am a passionately curious engineer.
                            <br />
                            <br />
                            In a previous life, I was a professional structural engineer, designing cutting edge and architecturally expressive buildings. Now, I'm bringing my past design and leadership excellence into building amazing things in a virtual space. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}