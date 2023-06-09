// ACTION TYPES
const LOAD_REVIEWS = 'review/LOAD_REVIEWS'
const ADD_REVIEW = 'review/ADD_REVIEW'
const EDIT_REVIEW = 'review/EDIT_REVIEW'
const REMOVE_REVIEW = 'review/REMOVE_REVIEW'

// ACTION CREATORS

// Load Reviews Action
export const load = reviews => ({
    type: LOAD_REVIEWS,
    reviews
})

// Add Review Action
export const addReview = (review) => ({
    type: ADD_REVIEW,
    review
})

// Edit Review Action
export const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
})

// Remove Review Action
export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
})


// THUNKS

// load Reviews thunk
export const loadReviews = (gameId) => async dispatch => {
    let res = await fetch(`/api/games/${gameId}/reviews`)
    if(res.ok) {
        res = await res.json()
        dispatch(load(res))
    }
}

// add Review thunk
export const createReview = (review, gameId) => async dispatch => {

    let res = await fetch(`/api/games/${gameId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    });


    if(res.ok) {
        const newReview = await res.json();

        dispatch(addReview(newReview));
        return newReview;
    }
}

// edit Review thunk
export const updateReview = (gameId, data) => async dispatch => {
    console.log("DATA", data)
    const { review, recommended, user_id, game_id } = data;
    console.log("gameId", gameId);
    console.log("review", review);
    console.log("recommended", recommended);
    console.log("user_id", user_id);
    console.log("game_id", game_id);

    const res = await fetch(`/api/games/${gameId}/reviews`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            review,
            recommended,
            user_id,
            game_id
        })
    });

    if(res.ok) {
        const updatedReview = await res.json();
        console.log("updatedReview", updatedReview)
        dispatch(editReview(updatedReview));
        return updatedReview;
    }
}

// delete Review thunk
export const deleteReview = (reviewId) => async dispatch => {
    const res = await fetch(`/api/reviews/${reviewId}`, { // may have to adjust route
        method: "DELETE"
    });

    if(res.ok) {
        const review = await res.json()
        dispatch(removeReview(review))
    }
}


// STATE
const initialState = {}
const reviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEWS:
            const loadState = {};
            action.reviews.forEach(review => loadState[review.id] = review);
            return {...state, ...loadState}

        case ADD_REVIEW:
            return {...state, [action.review.id]: action.review}

        case EDIT_REVIEW:
            const updatedReview = action.review;
            return {...state, [updatedReview.id]: updatedReview};

        case REMOVE_REVIEW:
            const deleteState = {...state};
            delete deleteState[action.reviewId.id]
            return deleteState;
        default:
            return state
    }
}

export default reviewReducer
