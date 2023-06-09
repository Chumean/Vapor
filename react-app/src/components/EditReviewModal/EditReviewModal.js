import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { useModal } from "../../context/Modal";
import { getGameDetails } from "../../store/game";
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import "./EditReviewModal.css";

const EditReviewModal = ({id, gameId}) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();

    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState(true);
    const [error, setError] = useState('');
    const currentGame = useSelector(state => state?.game?.details)
    const currentTitle = currentGame?.title

    const handleChange = async (e) => {
        e.preventDefault();

        // if(review.value.trim().length === 0) {
        //     setError("Please provide at least 1 character to update the review.");
        //     return;
        // }

        const updatedReview = {
            id: id,
            review: review,
            recommended: recommended
        };

        await dispatch(updateReview(gameId, updatedReview));
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
                            onClick={() => setRecommended(true)}
                            >
                            Yes
                            <FaRegThumbsUp  className="rec-icon"/>
                        </span>

                        <span
                            className='rec-span-down'
                            onClick={() => setRecommended(false)}
                            >
                            No
                            <FaRegThumbsDown className="rec-icon" />
                        </span>
                    </div>

                    <span className="post-review-span" onClick={handleChange}>
                        Post review
                    </span>


                </div>
                {error && <p className="error-message">{error}</p>}
            </form>

        </div>
    )



}

export default EditReviewModal;
