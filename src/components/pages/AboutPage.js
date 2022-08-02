import React from 'react';
import profile from '../../media/profile.svg'


export default function AboutPage() {

    return (
        <div className='about-page'>
            <div className='container'>
                <div className='img-col'>
                    <img alt='Profile' src={profile} />
                </div>
                <div className='text-col'>
                    <div className='text-container'>
                        <h2>
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