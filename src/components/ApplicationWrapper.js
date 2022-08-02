import React from 'react';
import TitlePage from './pages/TitlePage.js';
import AboutPage from './pages/AboutPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import Navbar from './other/Navbar.js';

export default function ApplicationWrapper() {

    return (
        <div className='wrapper'>
            <TitlePage />
            <Navbar />
            <AboutPage />
            <ExperiencePage />
            <ProjectsPage />
        </div>
    )
}