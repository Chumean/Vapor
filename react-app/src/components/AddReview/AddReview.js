import {React , useState} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { getGameDetails } from "../../store/game";

const AddReview =({gameId}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const { gameId } = useParams();
    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState(true)

    const handleSubmit = async(e) => {
        e.preventDefault();

        const newReviewInput = {
            user_id: sessionUser.id,
            game_id: gameId,
            review:review,
            recommended: recommended
        };

        await dispatch(createReview(newReviewInput, gameId));
        await dispatch(getGameDetails(gameId));
    }


    return (
        <div className="review-panel">
            <form onSubmit={handleSubmit}>
                <h1>Write a review for game name</h1>
                <p>Please describe what you liked or disliked about this game and whether you recommend it to others.</p>
                <p>Please remember to be polite and follow the Rules and Guidelines.</p>

                <div className="review-input">
                    <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="review-textarea"
                    >
                    </textarea>
                </div>

                <div className="review-controls">
                    <p>Do you recommend this game?</p>
                    <span>Yes</span>
                    <span>No</span>
                    <button className="review-button" type="submit">
                        Post review
                    </button>

                </div>

            </form>

        </div>
    )
}
