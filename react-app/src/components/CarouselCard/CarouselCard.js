import React from "react";
import {Link} from 'react-router-dom';

const CarouselCard = ({game, image}) => {

    return (
        <li key= {game.id}>
            <Link to={`/games/${game.id}`}>
                <div
                style={{image: image}}
                >
                </div>
            </Link>
        </li>
    )
}

export default CarouselCard;
