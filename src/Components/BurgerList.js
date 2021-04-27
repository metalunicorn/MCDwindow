import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import { actionPlaylists } from "../Store/Actions";
import { store } from "../Store";




store.dispatch(actionPlaylists())
const PlaylistList = ({getData,action,playerData}) => {
    console.log(getData && getData[0].name)
    return(
        <> 
        {console.log(getData && getData[0].name)}
        <ul>
        {getData && getData.map(x => {
            return(
                <li>
                    <h4>{x.name}</h4>
                    <img src={`${x.img}`}/>
                </li>
            );
        })}
        </ul>
        <div>{getData && getData[0].name}</div>
        </>
    );
}
export const CPlaylistList = connect(s => ({ getData: s && s.promise && s.promise.burgerList && s.promise.burgerList.payload}), {})(PlaylistList)