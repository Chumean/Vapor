
import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllGames } from '../../store/game';
import "./GenreCarousel.css"

const GenreCarousel = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)
    console.log("GAMES", games)

    const rpg = Object.values(games).filter(game => game.title === "Persona 5 Royal")


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <AiOutlineLeft className="slick-prev" />,
        nextArrow: <AiOutlineRight className="slick-next" />,
      };

      // useEffect(() => {
      //   dispatch(getAllGames())
      // }, [dispatch])


      const genres = [
        { name: 'RPG' },
        { name: 'Hack and Slash' },
        { name: 'Roguelike' },
        { name: 'Fighting' },
        { name: 'FPS'},
      ];


      return (
        <div className='genre-caro-cont'>
             <Slider {...settings} className="genre-carousel-slider">
                {genres.map((genre, index) => (
                <div key={index} className="genre-slide-container">
                <div className="genre-slide">

                    <div className='genre-title'>{genre.name}</div>
                </div>
            </div>
      ))}
    </Slider>

        </div>
      )
}

export default GenreCarousel;
// Genres
// RPG, Action, Hack and Slash, Roguelike, Fighting, MMORPG Platformer, Battle Royale,
// FPS Sandbox
