import React from 'react';
import Tooltip from './TooltipFunc'


export default function tooltip() {
    return (
        <div>
            <h1>Tooltip Test</h1>
            <p data-tip="React-tooltip"> ◕‿‿◕ </p>
            <p data-tip="React-tooltip2"> ◕‿‿◕ </p>
            <p data-tip="React-tooltip3"> ◕‿‿◕ </p>
            <Tooltip />
        </div>
    )
}