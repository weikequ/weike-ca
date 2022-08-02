import React from 'react';
import ExpTile from '../other/ExpTile';

export default function ExperiencePage() {

    return (
        <div className='experience-page'>
            <div className='container'>
                <h2>
                    Experiences
                </h2>
                <div className='tile-container'>
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
