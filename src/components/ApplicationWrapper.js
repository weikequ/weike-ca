import React from 'react';
import TitlePage from './pages/TitlePage.js';
import AboutPage from './pages/AboutPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';

export default function ApplicationWrapper() {

    return (
        <div className='h-screen snap-mandatory snap-y overflow-y-scroll'>
            <TitlePage />
            <AboutPage />
            <ExperiencePage />
            <ProjectsPage />
        </div>
    )
}