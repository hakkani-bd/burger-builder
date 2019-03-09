import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = ( porps ) =>{
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type = 'bread-top' />
            <BurgerIngredient type = 'meat' />
            <BurgerIngredient type = 'salad' />
            <BurgerIngredient type = 'bread-bottom' />
        </div>
    );
}

export default burger;