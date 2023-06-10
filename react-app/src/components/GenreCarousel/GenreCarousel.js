
import {React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllGames } from '../../store/game';

const GenreCarousel = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: <AiOutlineLeft className="slick-prev" />,
        nextArrow: <AiOutlineRight className="slick-next" />,
      };

      useEffect(() => {
        dispatch(getAllGames())
      }, [dispatch])

      return (
        <div className='genre-caro-cont'>
             <Slider {...settings} className="game-carousel-slider">
                {Object.values(games).map((game) => (
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
      )
}

export default GenreCarousel;
