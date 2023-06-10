import React from "react";
import Categories from "../Categories/Categories";
import GameCarousel from "../GameCarousel/GameCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css"
import GenreCarousel from "../GenreCarousel/GenreCarousel";

const HomePage = () => {

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
