import {connect} from 'react-redux';
import React, {useEffect} from 'react';
import { actionBurgerIngridients, actionaddCart } from "../Store/Actions";
import { CBurgerCustomization } from "../Components/BurgerIngredientsList";



const PageBurgerCustoms = ({match:{params: {id}},getData,Data2,cart }) => {
    // console.log(id)
    // console.log(Data2)
    // console.log(getData)
    useEffect(() => {
        getData(id)
    }, [id])
    if(Data2){
    return <CBurgerCustomization/>
    }
    else {
        return <div>NOTFOUND</div>
    }
}

export const CPageBurgerCustoms = connect(s=>({Data2: s.promise && s.promise.burgerIng && s.promise.burgerIng.payload && s.promise.burgerIng.payload.id }),{getData: actionBurgerIngridients, cart: actionaddCart})(PageBurgerCustoms)