import React, { Component } from 'react';

import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.2,
    meat: 0.5,
    bacon: 0.3,
    cheese: 0.1,
}

class BurgerBuilder extends Component{

    state = {
        ingredients :{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : '$4:00'
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ 
            ingredients : updatedIngredients, 
            totalPrice : newPrice
        });

    }

    removeIngredientHandler = ( type ) => {

    }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;