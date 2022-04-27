import React from 'react';
import liSVG from '../../media/li.svg';
import ghSVG from '../../media/gh.svg';
import cvSVG from '../../media/cv.svg';
import liLightSVG from '../../media/li-light.svg';
import ghLightSVG from '../../media/gh-light.svg';
import cvLightSVG from '../../media/cv-light.svg';

export const iconType = {
    li: [liSVG, 'https://www.linkedin.com/in/weikequ/'],
    gh: [ghSVG, 'https://github.com/weikequ'],
    cv: [cvSVG, process.env.PUBLIC_URL + '/media/resume-weike-qu.pdf'],
    liL: [liLightSVG, 'https://www.linkedin.com/in/weikequ/'],
    ghL: [ghLightSVG, 'https://github.com/weikequ'],
    cvL: [cvLightSVG, process.env.PUBLIC_URL + '/media/resume-weike-qu.pdf']
}
export default function IconButton({ type }) {
    return (
        <a href={iconType[type][1]}>
            <img src={iconType[type][0]} alt={iconType[type][1]}/>
        </a>
    )
}