
const ADD_CART = 'game/ADD_CART'

const LOAD_CART = 'user/LOAD_CART'

const UPDATE_CART = 'user/UPDATE_CART'

const DELETE_CART = 'user/DELETE_CART'

const EMPTY_CART = 'user/EMPTY_CART'

const addCartGame = (cartRel) => ({
    type: ADD_CART,
    cartRel
})

const loadCart = (list) => ({
    type: LOAD_CART,
    list
});

const deleteCartGame = (id) => ({
    type: DELETE_CART,
    id
})

const updateCartQty = (cartRel) => ({
    type: UPDATE_CART,
    cartRel
})

const emptyCart = () => ({
    type: EMPTY_CART
})

const initialState = {};

export const addGameToCart = (cartRel) => async (dispatch) => {

    const {gameId, user, qty} = cartRel

    const res = await fetch(`/api/users/${user}/cart/${gameId}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            game_id: gameId,
            user_id: user,
            quantity: qty
        })
    })

    if (res.ok) {
        const newCartRel = await res.json()

        dispatch(addCartGame(newCartRel))
    }
}

export const getCart = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/cart`)


    if (res.ok) {
        const games = await res.json()

        dispatch(loadCart(games))
    }
}

export const updateQty = (cartRel) => async (dispatch) => {
    const {gameId, user, qty} = cartRel

    const res = await fetch(`/api/users/${user}/cart/${gameId}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            game_id: gameId,
            user_id: user,
            quantity: qty
        })
    })

    if (res.ok) {
        const updatedCartRel = await res.json()

        dispatch(updateCartQty(updatedCartRel))
    }
}

export const deleteFromCart = (userId, gameId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/cart/${gameId}`, {
        method: 'DELETE'
    })


    if (res.ok) {

        const cartRel = await res.json()

        dispatch(deleteCartGame(cartRel.id))
    }
}

export const emptyUserCart = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/cart`, {
        method: 'DELETE'
    })

    if (res.ok) {
        await res.json();
        dispatch(emptyCart());
    }
}


export default function cartReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case LOAD_CART:
            newState = { ...state }

            action.list.forEach((cartRel) => {
                newState[cartRel.id] = cartRel;
            });

            return { ...newState }
        case ADD_CART:
            newState = { ...state }

            newState[action.cartRel.id] = action.cartRel

            return newState
        case UPDATE_CART:
            newState = { ...state }

            newState[action.cartRel.id] = action.cartRel

            return newState
        case DELETE_CART:

            newState = { ...state }

            delete newState[action.id]

            return newState

        case EMPTY_CART:
            return {};
        default:
            return state;
    }
}
