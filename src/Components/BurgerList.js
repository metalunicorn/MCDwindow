import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect,Link } from 'react-router-dom';
import { actionPlaylists } from "../Store/Actions";
import { store } from "../Store";




store.dispatch(actionPlaylists())
const PlaylistList = ({getData,action,playerData}) => {
    console.log(getData && getData[0].name)
    return(
        <> 
        <div>{getData && getData[0].name}</div>
        </>
    );
}
export const CPlaylistList = connect(s => ({ getData: s && s.promise && s.promise.burgerList && s.promise.burgerList.payload}), {})(PlaylistList)