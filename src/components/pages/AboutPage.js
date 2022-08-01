import React from 'react';
import profile from '../../media/profile.svg'


export default function AboutPage() {

    return (
        <div className='about-page'>
            <div className='container md:flex md:place-content-center py-16'>
                <div className='img-col md:order-2 md:basis-full flex justify-center'>
                    <img className='h-[40vh] md:h-[80vh]' alt='Profile' src={profile} />
                </div>
                <div className='text-col md:order-1 md:basis-full'>
                    <div className='text-container p-3 sm:p-8 md:p-24 2xl:p-30 md:h-full flex flex-col justify-center'>
                        <h2 className="py-4 sm:py-10">
                            Welcome! It's good to see you!
                        </h2>
                        <p>
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