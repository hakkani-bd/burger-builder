import React from 'react';

import classes from './BuildControls.css';
import BuidControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
]

const buildControls = ( props ) =>(
    <div className={classes.BuildControls}>
        {controls.map( ctrl =>(
            <BuidControl 
                key={ctrl.label} 
                label={ctrl.label}
                added = {() => props.ingredientAdded(ctrl.type)}
            />
        ))}
    </div>
);

export default buildControls;