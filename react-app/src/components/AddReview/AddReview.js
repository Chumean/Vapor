import {React , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { getGameDetails } from "../../store/game";
import {FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import "./AddReview.css";

const AddReview =({gameId}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state?.session?.user);
    const currentGame = useSelector(state => state?.game?.details)

    const currentTitle = currentGame?.title

    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState('Yes');
    const [error, setError] = useState('');
    const [option, setOption] = useState('Yes')

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (review.trim().length === 0) {
            setError("Please provide at least 1 character to review.");
            return;
        }

        const newReviewInput = {
            user_id: sessionUser.id,
            game_id: gameId,
            review:review,
            recommended: recommended
        };

        await dispatch(createReview(newReviewInput, gameId));
        setReview('');
        setRecommended('');
        setError('')
    }

    return (
        <div className="review-panel">
            <form onSubmit={handleSubmit}>
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
                    <p className="recommend-p">Would you recommend this game?</p>

                    <div className="recommend-options">
                        <span
                            className={`rec-span-up ${option === 'Yes' ? 'selected' : ''}`}
                            onClick={() => {
                                setRecommended("Yes");
                                setOption("Yes")
                            }}
                            >
                            Yes
                            <FaRegThumbsUp  className="rec-icon"/>
                        </span>

                        <span
                            className={`rec-span-down ${option === 'No' ? 'selected' : ''}`}
                            onClick={() => {
                                setRecommended('No');
                                setOption("No")
                            }}
                            >
                            No
                            <FaRegThumbsDown className="rec-icon" />
                        </span>
                    </div>

                    <span className="post-review-span" onClick={handleSubmit}>
                        Post review
                    </span>

                </div>
                {error && <p className="error-message">{error}</p>}
            </form>

        </div>
    )
}

export default AddReview;
