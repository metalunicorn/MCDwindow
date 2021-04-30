import { gql } from "../gql.js";











export const actionPromise = (name, promise) => {
    const actionPending = () => ({ type: 'PROMISE', name, status: 'PENDING', payload: null, error: null })
    const actionResolved = payload => ({ type: 'PROMISE', name, status: 'RESOLVED', payload, error: null })
    const actionRejected = error => ({ type: 'PROMISE', name, status: 'REJECTED', payload: null, error })


    return async dispatch => {
        dispatch(actionPending())
        let payload
        try {
            payload = await promise
            dispatch(actionResolved(payload))
        }
        catch (e) {
            dispatch(actionRejected(e))
        }
        return payload;
    }
}

export const actionPlaylists = () =>
async dispatch => {
    let burgerListData = await dispatch(actionPromise('burgerList', gql()))
    console.log(burgerListData)
}

export const actionBurgerIngridients = (id) =>
async dispatch => {
    let BurgerIngridientsData = await dispatch(actionPromise('burgerIng', fetch(`http://localhost:3000/main/${id}`,{method: 'GET'
}).then(res =>res.json())))
    console.log(BurgerIngridientsData)
}

export const actionCountAdd = (add) => ({type: "ADD", add})
export const actionCountDel = (name) => ({type: "DELETE",name})
export const actionaddCart  = (itemOrder) => ({type: "CART_ADD",itemOrder})
export const actionDelCart  = () => ({type: "CART_CLEAR"})