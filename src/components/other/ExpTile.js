import React from 'react';

export const tileType = {
    ubc: ['bg-ubc', 'University of British Columbia', 'Bachelors of Applied Science with Distinction'],
    seabc: ['bg-seabc', 'Structural Engineers Assoc. of BC', 'Finance/Registration', ],
    cmolik: ['bg-cmolik', 'The Cmolik Foundation. of BC', 'Alumni Committee Chair', ],
    eq: ['bg-eq', 'Equilibrium Consulting', 'Project Engineer', ],
    ubc2: ['bg-ubc2', 'University of British Columbia', 'Bachelors of Computer Science', ],
}

export default function ExpTile({ type }) {
    return (
        <div className='experience-tiles hover:flex-[7]'>
            <div className={'absolute ' + tileType[type][0]}>
            </div>
            <p className='text-center'>
                {tileType[type][1]} <br/>
                {tileType[type][2]} <br/>
            </p>
        </div>
    )
}