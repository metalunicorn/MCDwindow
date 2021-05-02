import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { actionPlaylists } from "../Store/Actions";
import { store } from "../Store";




store.dispatch(actionPlaylists())
const BurgerList = ({ getData }) => {
    return (
        <>
            <ul className="burgerList">
                {getData && getData.map((x, index) => {
                    return (
                        <li key={index}>
                            <div>{x.name}</div>
                            <img src={`${x.img}`} />
                            <div className='buttonAddCart'>
                                <Link to={`/burgers/${x.id}`}><button>Menu</button></Link>
                            </div>
                        </li>

                    );
                })}
            </ul>
        </>
    );
}
export const CBurgerList = connect(s => ({ getData: s && s.promise && s.promise.burgerList && s.promise.burgerList.payload }), {})(BurgerList)