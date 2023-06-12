import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { useModal } from "../../context/Modal";
import { getGameDetails } from "../../store/game";
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import "./EditReviewModal.css";

const EditReviewModal = ({gameId, reviewId}) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();

    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState('');
    const [error, setError] = useState('');

    const currentGame = useSelector(state => state?.game?.details)
    const currentTitle = currentGame?.title

    const user = useSelector(state => state?.session?.user)
    const userId = user?.id


    const handleChange = async (e) => {
        e.preventDefault();

        const updatedReview = {
            review,
            recommended,
            user_id: userId,
            game_id: gameId,
        };



        await dispatch(updateReview(gameId, reviewId, updatedReview));
        await dispatch(getGameDetails(gameId));

        closeModal();
    }


    return (
        <div className="review-panel">
            <form onSubmit={handleChange}>
                <h1 className="review-h1">Write a review for {currentTitle}</h1>
                <p className="review-describe">Please describe what you liked or disliked about this game and whether you recommend it to others.</p>
                <p className="review-describe">Please remember to be polite and follow the Rules and Guidelines.</p>

                <div className="review-input">
                    <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="review-textarea"
                    style={{width: "764px", height:"132px"}}
                    >
                    </textarea>
                </div>

                <div className="review-controls">
                    <p className="recommend-p">Do you recommend this game?</p>

                    <div className="recommend-options">
                        <span
                            className='rec-span-up'
                            onClick={() => setRecommended("Yes")}
                            >
                            Yes
                            <FaRegThumbsUp  className="rec-icon"/>
                        </span>

                        <span
                            className='rec-span-down'
                            onClick={() => setRecommended("No")}
                            >
                            No
                            <FaRegThumbsDown className="rec-icon" />
                        </span>
                    </div>

                    <span className="edit-post-review-span" onClick={handleChange}>
                        Post review
                    </span>


                </div>
                {error && <p className="error-message">{error}</p>}
            </form>

        </div>
    )



}

export default EditReviewModal;
