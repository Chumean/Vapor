import {React, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateReview } from "../../store/review";
import "./EditReviewPage.css";
import { getGameDetails } from "../../store/game";
import { loadReviews } from "../../store/review";
import {FaRegThumbsUp, FaRegThumbsDown, FaUserSecret} from 'react-icons/fa';
import logo from "../../assets/logo.png";

const EditReviewPage = () => {
    const { gameId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const {reviewId} = useParams();
    const [review, setReview] = useState('');
    const [recommended, setRecommended] = useState('');
    const [errors, setErrors] = useState('');

    const user = useSelector(state => state?.session?.user)

    const userId = useSelector(state => state?.session?.user.id)

    const game = useSelector(state => state?.game)

    const gameDetails = game?.details

    const reviews = useSelector(state => state.reviews)

    const filteredReviews = Object.values(reviews).filter((review) => review?.game_id === gameDetails?.id && review.user_id === userId)



    useEffect(() => {
        dispatch(getGameDetails(gameId))
        dispatch(loadReviews(gameId))
        const validationErrors = [];
        if(!review.length) {
            validationErrors.push("Please enter a minimum of 1 character.");
        }
    }, [dispatch, review])

    const handleEdit = async(e) => {
        e.preventDefault();

        const reviewFormInput = {
            review,
            recommended,
            user_id: userId,
            game_id: gameId
        }

        let edited;

        edited = await dispatch(updateReview(reviewId, reviewFormInput));

        if(edited) {
            history.push(`/games/${gameId}`)
        }
    }


    return (
        <div className="edit-review-page">
            <div className="edit-profile-header">TEST</div>

            <div className="review-page-content">
                <div className="review-left-cont">
                    {filteredReviews && filteredReviews.map((review) => (
                        <div key={review?.id}>
                                <div className="edit-review-block">
                            <div className="edit-review-leftcol">

                                <div className="edit-review-user-icon">
                                    <FaUserSecret style={{width: '34px', height: '34px'}} />
                                </div>

                                {user && reviews && user.id === review.user_id ? (

                                    <div className="has-reviewed-options">

                                </div>
                                ) : (
                                    <br />
                                )}


                            </div>

                            <div className="edit-review-rightcol">
                                {review.recommended ? (
                                    <div className="edit-review-recommended-header">

                                        <div className="review-vote">
                                            <FaRegThumbsUp className="thumbs-up-icon"
                                            style={{width: '40px', height:'40px'}} />
                                        </div>

                                        <div className="recommended-text">
                                            Recommended
                                        </div>

                                        <div className="small-logo">
                                            <img src={logo} style={{width: '19px', height: '19px'}} />
                                        </div>
                                    </div>
                                    ) : (
                                    <div className="edit-review-recommended-header">

                                        <div className="review-vote">
                                            <FaRegThumbsDown className="thumbs-down-icon"
                                            style={{width: '40px', height:'40px'}} />
                                        </div>

                                        <div className="recommended-text">
                                        Not Recommended
                                        </div>

                                        <div className="small-logo">
                                            <img src={logo} style={{width: '19px', height: '19px'}} />
                                        </div>
                                    </div>
                                    )}

                                <div className="review-content">
                                    <p>{review?.review}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                    LEFT CONTENT
                </div>
            </div>

            <div className="review-right-cont">
                RIGHT CONTENT
                <div className="review-right-actions">
                    <div className="review-game-art"></div>
                    <div className="review-gamepage"></div>
                </div>

                <div className="owner-controls">
                    <div className="owner-edit"></div>
                    <div className="owner-delete"></div>
                </div>
            </div>
        </div>
    )

}

export default EditReviewPage;
