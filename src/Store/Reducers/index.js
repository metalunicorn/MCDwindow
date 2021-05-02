export function promiseReducer(state = {}, action) {
    if (action.type === 'PROMISE') {
        const { name = "default", status, payload, error } = action
        if (status) {
            return {
                ...state, [name]: { status, payload: (status === 'PENDING' && state[name] && state[name].payload) || payload, error }
            }
        }
    }
    if(action.type === "ADD")
    {
        let count = state.burgerIng.payload.ingredients.find(ing => ing.name === action.add).count
        if ( count<3) {
            count ++ 
        }
        state.burgerIng.payload.ingredients.find(ing => ing.name === action.add).count = count 
        return {
            ...state,
        }
    }
    if(action.type === "DELETE")
    {
        let count = state.burgerIng.payload.ingredients.find(ing => ing.name === action.name).count 
        if (count>0) {
            count -- 
        }
        state.burgerIng.payload.ingredients.find(ing => ing.name === action.name).count = count 
        return {
            ...state,
        }
    }
    return state;
}

export function cartReducer (state, {type,itemOrder}) {
    if(state === undefined){
        if(localStorage.basket) {
            state =  JSON.parse(localStorage.basket);
        }
        else { 
            state = {};
        }
    }
    if (type === "CART_ADD") {
        console.log(state)
        for (const key in state) {
            if (key == itemOrder.id) {
                console.log(key)
                if(!(JSON.stringify(state[key].ing) === JSON.stringify(itemOrder.ingredients))){
                    itemOrder.id = Math.random()

                }
            }
        }
        state = {
            ...state,
             [itemOrder.id]:{
                    id: itemOrder.id,
                    image: itemOrder.img,
                    name: itemOrder.name,
                    ing: itemOrder.ingredients,
                    count: ((state[itemOrder.id] ? state[itemOrder.id].count : 0) + 1  )},
                   
        };
        localStorage.basket =  JSON.stringify(state)
        return state
    }
    if (type === "CART_CLEAR") {
        state = {}
        localStorage.removeItem('basket')
        return state
    }
    return state
}