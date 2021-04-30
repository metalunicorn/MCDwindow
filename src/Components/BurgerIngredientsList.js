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
            
            <h2>{getData.name}</h2>
            <img src={`${getData.img}`}/>
            <div className = "customizationList">
            {getData.ingredients.map((x,index)=>{
                                            
                                            return(
                                                    <div key={index}>
                                                    <div>{x.name}</div>
                                                    <button onClick={()=> add2(x.name)}>+</button>
                                                    <button onClick = {()=> del2(x.name)}>-</button>
                                                    <div>{x.count}</div>
                                                    </div>

                                                  )
                                          })
            }
            </div>
            <Link to={`/basket`}><button onClick={()=>addCart(getData)}>Добавить в корзину</button></Link>
        </>
    );
}
export const CBurgerCustomization = connect(s => ({ getData: s.promise && s.promise.burgerIng && s.promise.burgerIng.payload }), {add: actionCountAdd, del: actionCountDel, addCart: actionaddCart })(BurgerCustomization);