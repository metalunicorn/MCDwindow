import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import { actionDelCart } from "../Store/Actions";




const Basket = ({delet, getData}) => {
    console.log(getData)
    const basketArr = []
        for (let key in getData ) {
            basketArr.push(getData[key])
    }
    console.log(basketArr)
    const clear = () => {
        localStorage.basket = {}
        delet()

    }
    return(
        <> 
        <ul className="burgerList">
        {basketArr.map((x,index) => 
        <li key={index}>
        <div>{x.name}</div>
        <img src={x.image} />
        <div>{`count: ${x.count}`}</div>
        </li>
        )}
        </ul>
        <Link to={`/`}><button>Добавить еще</button></Link>
        <Link to={`/`}><button onClick={clear}>Завершить</button></Link>
        </>
    );
}
export const CBasket = connect(s => ({ getData: s && s.cart}), {delet: actionDelCart})(Basket)