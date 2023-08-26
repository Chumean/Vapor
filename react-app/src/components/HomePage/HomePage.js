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
import CarouselCard from "../CarouselCard/CarouselCard";

const HomePage = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state?.game)

    useEffect(() => {
<<<<<<< HEAD

=======
>>>>>>> daf9bb43be65d737c9497e7062f965c42e239b03
        dispatch(getAllGames())
    }, [dispatch])

    const fightingGames = Object.values(games).filter((game) => game.genre === "Fighting")

<<<<<<< HEAD
    const dupes = fightingGames.filter((game, index, self) => self.findIndex((g) => g.id === game.id) !== index)

=======


    const dupes = fightingGames.filter((game, index, self) => self.findIndex((g) => g.id === game.id) !== index)



>>>>>>> daf9bb43be65d737c9497e7062f965c42e239b03
    return(
        <div className="home-page-container">
            <div className="home-page-content">
                <Categories />
                <h3 className="home-page-content-title">FEATURED & RECOMMENDED</h3>
                <GameCarousel gameLimit={10}/>

                <div>
                    <GenreCarousel />
                </div>

            </div>
        </div>
    )

}


export default HomePage
