import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getGameDetails } from "../../store/game";
import { loadReviews } from "../../store/review";
import "./GameDetails.css";
import {AiFillAppstore} from 'react-icons/ai'
import {FaRegThumbsUp, FaRegThumbsDown, FaUserSecret} from 'react-icons/fa'
import logo from "../../assets/logo.png";
import AddReview from "../AddReview/AddReview";
import DeleteReviewModal from "../DeleteReviewModal/DeleteReviewModal";
import EditReviewModal from "../EditReviewModal/EditReviewModal";
import { useModal } from "../../context/Modal";
import { addGameToCart } from "../../store/cart";
import Categories from "../Categories/Categories";

const GameDetails = () => {
    const dispatch = useDispatch();
    const { gameId } = useParams();
    const {setModalContent} = useModal();
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

    const [existingRev, setExistingRev] = useState('');
    const [existingRec, setExistingRec] = useState('');


    const user = useSelector(state => state?.session?.user)

    const game = useSelector(state => state?.game)


    const gameDetails = game?.details

    const reviews = useSelector(state => state.reviews)

    const filteredReviews = Object.values(reviews).filter((review) => review?.game_id === gameDetails?.id)

    const userId = useSelector(state => state.session.user?.id)

    const hasReviewed = filteredReviews.some((review) => review.user_id === userId)

    const openModal = () => {
        setShowModal(true);
      };


    useEffect(() => {
        dispatch(getGameDetails(gameId));
        dispatch(loadReviews(gameId))
    }, [dispatch, gameId])

    const handleEdit = (review) => {
        setExistingRev(review.review);
        setExistingRec(review.recommended);

        setModalContent(
            <EditReviewModal
                gameId={gameId}
                reviewId={review.id}
                existingRev={review.review}
                existingRec={review.recommended}
                updateRevText={setExistingRev}
            />
        )
    }


    const handleDeleteReview = async (reviewId) => {
        setModalContent(<DeleteReviewModal id={reviewId} game_id={gameDetails?.id} />)
        openModal();
    }

    const handleAddToCart = () => {
        if( user && gameDetails) {
            const cartRel = {
                gameId: gameDetails?.id,
                user: user.id,
                qty: 1
            }
            dispatch(addGameToCart(cartRel))
            history.push('/cart')
        }
    }



    return (
        <div>
            <Categories />
        <div className="detail-page-container">
            {/* GAME ART AND SMALL INFO */}
            {gameDetails && gameDetails?.id ? (
            <div>
            <div className="game-details-title">{gameDetails?.title}</div>

            <div className="game-block">
                <div className="game-splashart">
                    <img
                        src={gameDetails && gameDetails?.image}
                        style={{ width: "600px",  height: "337px"}} />
                </div>

                <div className="game-shortinfo">
                    <div className="game-small-splash">
                    <img
                        src={gameDetails && gameDetails?.image}
                        style={{ width: "324px",  height: "151px"}} />
                    </div>
                    <div className="game-small-desc">{gameDetails?.description}</div>

                    <div className="game-review-count-row">
                        <div className="subtitle-column"></div>
                        <div></div>
                    </div>

                    <div className="flex-row game-release-date-row">
                        <div className="subtitle-column">RELEASE DATE:</div>
                        <div className="game-release-date-column">{gameDetails?.release_date}</div>

                    </div>

                    <div className="flex-row game-developer-row">
                        <div className="subtitle-column">DEVELOPER:</div>
                        <div className="game-dev">{gameDetails?.developer}</div>
                    </div>

                    <div className="flex-row game-publisher-row">
                        <div className="subtitle-column">PUBLISHER:</div>
                        <div className="game-pub">{gameDetails?.publisher}</div>
                    </div>

                    <div className="game-tag-label-row">Popular user-defined tags for this product:

                    </div>

                    <div className="game-tags-row">
                        <div className="game-tagz">{gameDetails?.tags}</div>
                    </div>
                </div>
            </div>

            {/* REVIEW MODAL START */}

            {user && hasReviewed && filteredReviews.length > 0 && (

                <div className="has-reviewed-area">
                <div className="has-reviewed-msg">You have reviewed this game.</div>
                {/* <div className="has-reviewed-options">
                    <span className="has-reviewed-span">Edit review</span>
                    <span className="has-reviewed-span">Delete review</span>
                </div> */}
                <div className="has-reviewed-desc">
                    You can edit this review, change your rating, or delete it if you wish.
                </div>
            </div>
            )}

            {user && !hasReviewed && (
                <div className="post-review-block">
                    <AddReview gameId={gameDetails?.id} />
                </div>
            )}

            {/* REVIEW MODAL END */}

            {/* GAME BUY CART START */}

            <div className="game-buy-block">
                <div className="game-buy-msg">
                    <h1 className="h1-buy">Buy {gameDetails?.title}</h1>
                    <div className="windows-icon">
                        <AiFillAppstore />
                    </div>
                </div>
            </div>

            <div className="game-purchase-action">

                <div className="price-info-block">
                    <div className="game-price">$ {gameDetails?.price}</div>
                    <span className="add-to-cart"
                        onClick={handleAddToCart}>
                        Add to Cart
                    </span>
                </div>
            </div>

            {/* GAME BUY CART END */}

            {/* REVIEWS START */}

            <div className="customer-reviews-area">
                <h2>CUSTOMER REVIEWS</h2>

                <div className="Review-count-block"></div>


                <div className="all-reviews">
                {filteredReviews &&
                filteredReviews.map((review) => (

                    <div key={review?.id}>
                        <div className="review-block">
                            <div className="review-leftcol">

                                <div className="review-user-icon">
                                    <FaUserSecret style={{width: '34px', height: '34px'}} />
                                </div>
                                <div className="review-user">
                                    <p>{review?.username}</p>

                                </div>
                                {user && reviews && user.id === review.user_id ? (

                                    <div className="has-reviewed-options">
                                <span className="has-reviewed-span"
                                    id={review?.id}
                                    onClick={() => handleEdit(review)}
                                    >Edit review
                                </span>

                                <span className="has-reviewed-span"
                                    id={review?.id}
                                    onClick={() => handleDeleteReview(review?.id, gameDetails?.id)}
                                    >Delete review
                                </span>
                                </div>
                                ) : (
                                    <br />
                                )}


                            </div>

                            <div className="review-rightcol">
                                {review.recommended === "Yes" ? (
                                    <div className="review-recommended-header">

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
                                    <div className="review-recommended-header">

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
                </div>
            </div>

            {/* REVIEW END */}

            </div>
            ) : ("Page not found")}
        </div>
    </div>
    )
}

export default GameDetails;

// Details include splash art of game
// Show first 10 reviews of the game
// Must be logged in to see a component to add review
