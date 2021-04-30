import { Header } from "./Header/index.js"
import '../App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import history from "../history";
import { Provider } from "react-redux";
import { store } from "../Store";
import {PageHome} from "../Pages/PageHome.js"
import {CPageBurgerCustoms} from "../Pages/PageBurgerCustoms"
import {PageBasket} from "../Pages/PageBasket"

export const NotFound = () => <div className="Error">404</div>

export const Content = () => {
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Header/>
          <main>
            <Switch>
              <Route path='/' component={PageHome} exact />
              <Route path='/burgers/:id' component={CPageBurgerCustoms} exact />
              <Route path='/basket' component={PageBasket} exact />
            </Switch>
          </main>
        </Router>
      </Provider>
    </>
  )
}