// ACTION TYPES
const LOAD = '/games/LOAD'
const LOAD_DETAILS = '/games/LOAD_DETAILS'


// ACTION CREATORS
const loadGames = (list) => ({
    type: LOAD,
    list
})


const loadDetails = (gameId) => ({
    type: LOAD_DETAILS,
    gameId
});


// THUNKS
export const getAllGames = () => async (dispatch) => {
    const res = await fetch("/api/games");

    if(res.ok) {
        const list = await res.json();
        dispatch(loadGames(list.games))
    }
}

export const getGameDetails = (gameId) => async (dispatch) => {
    const response = await fetch(`/api/games/${gameId}`);
    if (response.ok) {
      const game = await response.json();
    //   console.log("Received game details:", game)
      dispatch(loadDetails(game));
    }
};

export const getGamesByCategory = (category) => async (dispatch) => {
    const response = await fetch(`/api/games/${category}`);

    if (response.ok) {
      const list = await response.json();

      dispatch(loadGames(list.games));
    }
};


const initialState = {};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD:
            const newState = {...state};
            action.list.forEach((game) => {
                newState[game.id] = game;
            });
            return newState;
        case LOAD_DETAILS:
            return {...state, details: action.gameId };
        default:
            return state;
    }
}

export default gameReducer
