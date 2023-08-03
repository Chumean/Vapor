import React from "react";
import { NavLink } from "react-router-dom";
import Categories from "../Categories/Categories";
import GameCarousel from "../GameCarousel/GameCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css"
import GenreCarousel from "../GenreCarousel/GenreCarousel";
import { getAllGames } from "../../store/game";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const HomePage = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state?.game)

    const fightingGames = Object.values(games).filter((game) => game.genre === "Fighting")

    return(
        <div className="home-page-container">
            <div className="home-page-content">
                <Categories />
                <h3 className="home-page-content-title">FEATURED & RECOMMENDED</h3>
                <GameCarousel gameLimit={10}/>

                <div>
                    <GenreCarousel />
                </div>

                <div className="fighter-row">
                <p className="fighter-text">FIGHTERS</p>
                    <div className="fgame-cardz">
                    {fightingGames.map((game) => (

                        <NavLink key={game.id} to={`/games/${game.id}`} className="fgame-card">

                        <img src={game.image} alt={game.title} className="fgame-image" />

                        <div className="fgame-title">{game.title}</div>
                        <div className="fgame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>
            </div>
        </div>
    )

}


export default HomePage
