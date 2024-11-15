import {React} from "react";
import { useSelector} from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./GameCarousel.css";
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const GameCarousel = ({gameLimit}) => {

  const games = useSelector(state => state?.game) // original

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <AiOutlineLeft className="slick-prev" />,
    nextArrow: <AiOutlineRight className="slick-next" />,
  };

  const randomGames = Object.values(games).sort(() => Math.random() - 0.5)

  const limitedGames = randomGames.slice(0, gameLimit);

  return (
    <div className="carousel-container">
    <Slider {...settings} className="game-carousel-slider">
      {limitedGames.map((game) => (
        <div key={game.id} className="slide-container">
          <div className="img-slide">
            <a href={`/games/${game?.id}`}>
            <img src={game.image} alt={game.title} />
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default GameCarousel;
