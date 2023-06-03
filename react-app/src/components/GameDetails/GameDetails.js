import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getGameDetails } from "../../store/game";
import "./GameDetails.css"
import p5r from "../../assets/p5r.jpg"

const GameDetails = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const user = useSelector(state => state.session?.user)

    const game = useSelector(state => state.game);
    console.log(game)

    useEffect(() => {
        dispatch(getGameDetails(gameId));

    }, [dispatch, gameId])

    return (
        <div className="game-details-page">
            <h1>Game Details</h1>

            <div className="game-block">GAME BLOCK
                <div className="game-splashart">
                    <img src={p5r} style={{width: "600px", height: "377px"}} />
                </div>
                <div className="game-shortinfo">
                    <div className="game-small-splash">
                    </div>
                    <div className="game-small-desc"></div>
                    <div className="game-review-count"></div>
                    <div className="game-developer"></div>
                    <div className="game-publisher"></div>
                    <div className="game-tag-label"></div>
                    <div className="game-tags"></div>
                </div>
            </div>

            <div className="game-buy-block">
                <div className="game-buy-msg"></div>
                <div className="add2cart-block">
                    <div className="game-price"></div>
                    <div className="add2cart-button"></div>
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
    )
}

export default GameDetails;

// Details include splash art of game
// Show first 10 reviews of the game
// Must be logged in to see a component to add review