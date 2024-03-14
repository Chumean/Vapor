
import {React} from 'react';
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GenreCarousel.css"
import {Link} from 'react-router-dom';

const GenreCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        prevArrow: <AiOutlineLeft className="slick-prev" />,
        nextArrow: <AiOutlineRight className="slick-next" />,
        // spacing: 10
      };

      // useEffect(() => {
      //   dispatch(getAllGames())
      // }, [dispatch])


      const genres = [
        { key: 'RPG', url: `/games/1`, image: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589376/656e8c37-8260-4bfc-82d0-e16650dd147c_pz6oed.jpg' },
        { key: 'HACK N SLASH', url: `/games/2`, image: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1687565350/featured-nier-automata-cover-art_woknln.jpg'},
        { key: 'ROGUE', url: `/games/8`, image: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590492/header_atue4i.jpg'},
        { key: 'FIGHTING', url: `/games/5`, image: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590390/capsule_616x353_nxqqtx.jpg' },
        { key: 'FPS', url: `/games/18`, image: 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429471/overwatchmain_vt28ld.webp'},
      ];

      return (
        <div className='genre-caro-cont'>
             <Slider {...settings} className="genre-carousel-slide">
                {genres.map((genre) => (
                <div key={genre.key} className="genre-slide-container">
                  <div className="genre-slide">
                    <Link to={genre.url} className='genre-slide-bg'>
                                <img src={genre.image} alt={genre.name} />
                    </Link>

                    <div className='genre-title'>{genre.key}</div>
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
