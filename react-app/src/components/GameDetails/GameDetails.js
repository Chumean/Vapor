import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetails } from "../../store/game";
import "./GameDetails.css";
import {AiFillAppstore} from 'react-icons/ai'

const GameDetails = () => {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const user = useSelector(state => state.session?.user)

    const game = useSelector(state => state.game)

    const gameDetails = game.details


    useEffect(() => {
        dispatch(getGameDetails(gameId));

    }, [dispatch, gameId])

    const reviews = gameDetails?.reviews
    console.log(reviews)

    return (
        <div className="detail-page-container">

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
                    <span className="add-to-cart">Add to Cart</span>
                </div>
            </div>


            <div className="customer-reviews-area">
                <h2>CUSTOMER REVIEWS</h2>
                <div className="Review-count-block"></div>
                <div className="all-reviews">
                    <div className="review-block">
                        <div className="review-rightcol">
                            <div className="review-recommended-header">
                                <div className="review-vote"></div>
                                <div className="recommended-text"></div>
                                <div className="hours-on-record"></div>
                            </div>

                            <div className="review-content"></div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            ) : ("Page not found")}
        </div>
    )
}

export default GameDetails;

// Details include splash art of game
// Show first 10 reviews of the game
// Must be logged in to see a component to add review
