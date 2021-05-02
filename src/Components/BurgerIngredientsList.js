import { connect } from 'react-redux';
import React, { useState, useEffect, useRef } from "react";
import { actionCountAdd, actionCountDel,actionaddCart } from "../Store/Actions";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import  bunBM  from "../Img/bunBM.jpeg";
import  BM_Sauce from "../Img/BM_Sauce.jpeg"

const BurgerCustomization = ({getData,add,del,addCart}) => {
    const [count,setCount] = useState(0)
    function add2(add2) {
        add(add2)
        setCount(count+1)
    }
    function del2(name) {
        del(name)
        setCount(count+1)
    }
    return (
        <>  
            <div className = "burgerCustomization">
            <div className = "burgerCustomizationTitle">
            <h2>{getData.name}</h2>
            <img src={`${getData.img}`}/>
            </div>
            <div className = "customizationList">
            {getData.ingredients.map((x,index)=>{
                                            
                                            return(
                                                    <div className = "customizationListItem" key={index}>
                                                    <div>{x.name}</div>
                                                    <img src={x.img}/>
                                                    <div className = "customizationListButton"> 
                                                    <div>{x.count}</div>
                                                    <button onClick={()=> add2(x.name)}>+</button>
                                                    <button onClick = {()=> del2(x.name)}>-</button>
                                                    </div>
                                                    </div>
                                                  )
                                          })
            }
            </div>
            <div className= 'buttonAddCart'>
            <Link to={`/basket`}><button onClick={()=>addCart(getData)}>Подтвердить</button></Link>
            </div>
            </div>
        </>
    );
}
export const CBurgerCustomization = connect(s => ({ getData: s.promise && s.promise.burgerIng && s.promise.burgerIng.payload }), {add: actionCountAdd, del: actionCountDel, addCart: actionaddCart })(BurgerCustomization);