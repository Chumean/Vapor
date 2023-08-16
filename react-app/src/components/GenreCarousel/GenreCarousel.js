
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
        { key: 'rpg', url: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589376/656e8c37-8260-4bfc-82d0-e16650dd147c_pz6oed.jpg' },
        { key: 'hack', url: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1687565350/featured-nier-automata-cover-art_woknln.jpg'},
        { key: 'rogue', url: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590492/header_atue4i.jpg'},
        { key: 'fighting', url: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590390/capsule_616x353_nxqqtx.jpg' },
        { key: 'fps', url: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429471/overwatchmain_vt28ld.webp'},
      ];


      return (
        <div className='genre-caro-cont'>
             <Slider {...settings} className="genre-carousel-slider">
                {genres.map((genre) => (
                <div key={genre.key} className="genre-slide-container">
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
