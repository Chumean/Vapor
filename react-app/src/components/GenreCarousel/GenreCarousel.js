
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

      useEffect(() => {
        dispatch(getAllGames())
      }, [dispatch])


      const genres = [
        { name: 'RPG', bg: '#b3850d' },
        { name: 'Action', bg: '#860204' },
        { name: 'Hack and Slash', bg: '#800080' },
        { name: 'Roguelike', bg: '#010189' },
        { name: 'Fighting', bg: '#f08080' },
        { name: 'MMORPG', bg: '#4169e1' },
        { name: 'Platformer', bg: '#32cd32' },
        { name: 'Battle Royale', bg: '#ff4500' },
        { name: 'FPS', bg: '#1e90ff' },
        { name: 'Sandbox', bg: '#ffd700' },
      ];


      return (
        <div className='genre-caro-cont'>
             <Slider {...settings} className="genre-carousel-slider">
                {genres.map((genre, index) => (
                <div key={index} className="genre-slide-container">
                <div className="genre-slide">
                    <div className='genre-slide-bg' style={{ backgroundColor: genre.bg}}></div>
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
