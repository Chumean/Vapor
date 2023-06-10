import React from "react";
import { Link } from "react-router-dom";


const GameCard = (game) => {
    return (
        <div className="game-card">
            <div className="game-card-img">

            </div>

            <div className="game-card-info">
                <div className="game-card-title"></div>
                <div className="game-card-tags"></div>
                <div className="game-card-reviewprice">
                    <div className="game-card-reviews"></div>
                    <div className="game-card-price"></div>
                </div>
            </div>

        </div>
    )
}

// card img 219 x 102
//card title color: #E5E5E5 font 17px "Motiva Sans", sans-serif; margin 2px 0px 3px
// card tags color: #A5B0B6 font 10px "Motiva Sans", sans-serif; background #70818926
// margin 0px 2px 3px 0px padding 0px 7px

// card review color: #6B8AAA font 12px "Motiva Sans" , sans-serif; margin 0px 4px
// card price color: #C6D4DF font 14px "Motiva Sans" , sans-serif; background #0000001A
// margin 2px 2px 2px 0px padding 5px 8px

// card-info padding 8px 12px 12px
