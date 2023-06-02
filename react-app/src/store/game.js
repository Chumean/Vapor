const LOAD = '/games/LOAD'
const LOAD_DETAILS = '/games/LOAD_DETAILS'

const load = (list) => ({
    type: LOAD,
    list
})

const loadDetails = (id) => ({
    type: LOAD_DETAILS,
    id
})

export const getAllGames = () => async (dispatch) => {
    const res = await fetch("/api/games");

    if(res.ok) {
        const list = await res.json();
        dispatch(load(list.games))
    }
}

export const getGameDetails = (id) => async (dispatch) => {
    const response = await fetch(`/api/games/${id}`);
    if (response.ok) {
      const game = await response.json();
      dispatch(loadDetails(game));
    }
};

export const getGamesByCategory = (category) => async (dispatch) => {
    const response = await fetch(`/api/games/${category}`);

    if (response.ok) {
      const list = await response.json();

      dispatch(load(list.games));
    }
};


const initialState = {};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const newState = {};
            action.list.forEach((game) => {
                newState[game.id] = game;
            });
            return {...newState};
        case LOAD_DETAILS:
            return {...state, details: action.id };
        default:
            return state;
    }
}

export default gameReducer
