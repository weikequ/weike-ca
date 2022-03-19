import React from 'react';
import TitlePage from './pages/TitlePage.js';
import AboutPage from './pages/AboutPage.js';

export default function ApplicationWrapper() {

    return (
        <div className='h-screen snap-mandatory snap-y overflow-y-scroll'>
            <TitlePage />
            <AboutPage />
        </div>
    )
}