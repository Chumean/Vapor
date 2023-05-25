const LOAD = '/games/LOAD'


const load = (list) => ({
    type: LOAD,
    list
})

export const getAllGames = () => async (dispatch) => {
    const res = await fetch("/api/games");

    if(res.ok) {
        const list = await res.json();
        dispatch(load(list.games))
    }
}


const initialState = {};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const newState = {};
            action.list.forEach((game) => {
                newState[game.id] = game;
            });
            return {...newState};
        default:
            return state;
    }
}

export default gameReducer
