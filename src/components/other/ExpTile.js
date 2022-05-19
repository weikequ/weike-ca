import React from 'react';

export const tileType = {
    ubc: ['bg-ubc', 'University of British Columbia', 'Bachelors of Applied Science with Distinction'],
    seabc: ['bg-seabc', 'Structural Engineers Assoc. of BC', 'Finance/Registration Coordinator', ],
    cmolik: ['bg-cmolik', 'The Cmolik Foundation', 'Alumni Committee Chair', ],
    eq: ['bg-eq', 'Equilibrium Consulting', 'Project Engineer', ],
    ubc2: ['bg-ubc2', 'University of British Columbia', 'Bachelors of Computer Science', ],
}

export default function ExpTile({ type }) {
    return (
        <div className='group experience-tile-container hover:flex-[7]'>
            <div className={'experience-tile-bg group-hover:opacity-80 ' + tileType[type][0]}>
            </div>
            <p className='relative experience-tile-body group-hover:experience-tile-body-hover
                bg-blue-900/0 group-hover:bg-blue-900/70'>
                Duis ut id pariatur incididunt fugiat amet. Ullamco occaecat nisi est veniam aute mollit consectetur elit adipisicing eu reprehenderit. Proident deserunt sit amet enim. Excepteur consectetur velit sit consectetur ea ipsum labore voluptate aute anim do magna quis. Et sunt dolor do ex et incididunt laboris ullamco. Exercitation est qui esse nostrud nisi id dolore ad sit adipisicing esse consectetur non.
            </p>
            <p className='relative experience-tile-title bg-blue-900/0 group-hover:bg-blue-900/70
                group-hover:experience-tile-title-hover'>
                <span className='font-bold'>{tileType[type][1]}</span><br/>
                {tileType[type][2]} <br/>
            </p>
        </div>
    )
}