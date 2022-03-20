import React from 'react';
import liSVG from '../../media/li.svg';
import ghSVG from '../../media/gh.svg';
import cvSVG from '../../media/cv.svg';

export const iconType = {
    li: [liSVG, 'https://www.linkedin.com/in/weikequ/'],
    gh: [ghSVG, 'https://github.com/weikequ'],
    cv: [cvSVG, '']
}
export default function IconButton({ type }) {
    return (
        <a href={iconType[type][1]}>
            <img src={iconType[type][0]} alt={iconType[type][1]}/>
        </a>
    )
}