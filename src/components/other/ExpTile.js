import React from 'react';

export const tileType = {
    ubc: ['bg-ubc', 'University of British Columbia', 'Bachelors of Applied Science with Distinction'],
    seabc: ['bg-seabc', 'Structural Engineers Assoc. of BC', 'Finance/Registration Coordinator', 
        'Co-created and led an initiative to bring young structural engineers together in a collaborative environment to learn and participate in an open dialogue between peers. Personally moderated many of the discussions. Planned and run successful seminars/events to educate SEABC members on registration-related topics and manage the finances of the group. '],
    cmolik: ['bg-cmolik', 'The Cmolik Foundation', 'Alumni Committee Chair',
        'The Cmolik Foundation is an organization dedicated to helping students across BC access opportunities in higher education. Volunteered as one of the founding members on the alumni committee of the foundation, coordinating socials, outings, workshops, and other events to further alumni connection and to provide networking opportunities.'],
    eq: ['bg-eq', 'Equilibrium Consulting', 'Project Engineer', 
        'Designed and analyzed structural performance of state of the art seismic isolation systems, successfully leading teams on $20M+ projects. Led the internal processes committee to critically evaluate and improve the systems and processes that structural engineers depend on. Developed custom solutions through software APIs and programming to speed up design and analysis workflow.'],
    ubc2: ['bg-ubc2', 'University of British Columbia', 'Bachelors of Computer Science', ],
}

export default function ExpTile({ type }) {
    return (
        <div className='group experience-tile-container hover:flex-[7]'>
            <div className={'experience-tile-bg group-hover:opacity-80 ' + tileType[type][0]}>
            </div>
            <p className='relative experience-tile-body group-hover:experience-tile-body-hover
                bg-blue-900/0 group-hover:bg-blue-900/70'>
                {tileType[type][3]}
            </p>
            <p className='relative experience-tile-title bg-blue-900/0 group-hover:bg-blue-900/70
                group-hover:experience-tile-title-hover'>
                <span className='font-bold'>{tileType[type][1]}</span><br/>
                {tileType[type][2]} <br/>
            </p>
        </div>
    )
}