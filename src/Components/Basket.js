import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { actionDelCart } from "../Store/Actions";
import React, { useState, useEffect, useRef, useCallback } from "react";



const Basket = ({ delet, getData }) => {

    console.log(getData)
    const [show, setShow] = useState(false)
    const basketArr = []
    for (let key in getData) {
        basketArr.push(getData[key])
    }
    console.log(basketArr)
    const clear = () => {
        localStorage.basket = {}
        delet()

    }
    return (
        <>
            <ul className="burgerList">
                {basketArr.map((x, index) =>
                    <li key={index}>
                        <div>{x.name}</div>
                        <img src={x.image} />
                        <button onClick={() => show ? setShow(false) : setShow(true)}>ingredients</button>
                        {show
                            ? x.ing.map(y => <div>{`${y.name}: ${y.count}`}</div>)
                            : <div></div>
                        }
                        <h3>{`count: ${x.count}`}</h3>
                    </li>
                )}
            </ul>
            <div className="buttonAddCart">
                <Link to={`/`}><button>Добавить еще</button></Link>
                <Link to={`/`}><button onClick={clear}>Завершить</button></Link>
            </div>
        </>
    );
}
export const CBasket = connect(s => ({ getData: s && s.cart }), { delet: actionDelCart })(Basket)