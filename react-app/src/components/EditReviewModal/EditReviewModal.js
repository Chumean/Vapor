import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/review";
import { useModal } from "../../context/Modal";
import { getGameDetails } from "../../store/game";
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import "./EditReviewModal.css";

const EditReviewModal = ({gameId, reviewId, existingRev, existingRec, updateRevText }) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();

    const [review, setReview] = useState(existingRev);
    const [recommended, setRecommended] = useState(existingRec);
    const [error, setError] = useState('');

    const [option, setOption] = useState(existingRec)

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

        updateRevText(review);

        closeModal();
    }

    return (
        <div className="review-panel">
            <form onSubmit={handleChange}>
                <h1 className="review-h1">Write a review for {currentTitle}</h1>
                <p className="review-describe">Please describe and rate your experience with this game.</p>
                <p className="review-describe">Please remember to be polite and follow the Rules and Guidelines.</p>

                <div className="review-input">
                    <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="review-textarea"
                    style={{width: "760px", height:"132px"}}
                    >
                    </textarea>
                </div>

                <div className="review-controls">
                    <p className="recommend-p">Would you recommend this game?</p>

                    <div className="recommend-options">
                        <span
                            className={`rec-span-up ${option === 'Yes' ? 'selected' : ''}`}
                            onClick={() => {
                                setRecommended("Yes");
                                setOption("Yes");
                            }}
                            >
                            Yes
                            <FaRegThumbsUp  className="rec-icon"/>
                        </span>

                        <span
                            className={`rec-span-down ${option === 'No' ? 'selected' : ''}`}
                            onClick={() => {
                                setRecommended("No");
                                setOption("No")
                            }}
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
