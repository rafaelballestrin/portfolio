import React from 'react';
import Tooltip from './TooltipFunc'


export default function tooltip() {
    return (
        <div>
            <h1 data-tip='React-tooltip starts here'>Tooltip Test</h1>
            <p data-tip='React-tooltip'> :| </p>
            <p data-tip='React-tooltip2'> :D </p>
            <p data-tip='React-tooltip3'> :) </p>
            <Tooltip />
        </div>
    )
}