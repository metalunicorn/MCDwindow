import { Header } from "./Header/index.js"
import '../App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { store } from "../Store";
import {PageHome} from "../Pages/PageHome.js"

export const NotFound = () => <div className="Error">404</div>
// const PageAdd = ({match:{params: {a,b}}}) => <pre>{+a + +b}</pre>
// const PageCategory = ({history, match:{params: {_id}}}) => {
//     setTimeout(() => history.push('/'), 2000)
//     return <div>cat{_id}</div>
//     //useEffect(() => запрос, [_id]) //запрос осуществляется actionCreator
//     //return {
//         //WORSTKA
//     //}
// }
export const Content = () => {
  return (
    <>
      <Provider store={store}>
        <Router history={createHistory()}>
          <Header/>
          <main>
            <Switch>
              <Route path='/main' component={PageHome} exact />
              {/* <Route path="/explore" component={CResultSearch} />
              <Route path='/library/playlists/:_id' component={CPagePlaylist} exact />
              
              <Route path="/auth" component={PageAuth} />
              <Route path="/reg" component={PageReg} />
              <Route path="/myPlayList" component={CMyPlaylist}/>
              <Route component={NotFound} exact /> */}
            </Switch>
          </main>
        </Router>
      </Provider>
    </>
  )
}