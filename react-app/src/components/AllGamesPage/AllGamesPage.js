
import { useSelector, useDispatch } from "react-redux";
import { useEffect, React } from "react";
import { getAllGames } from "../../store/game";
import Categories from "../Categories/Categories";
import "./AllGamesPage.css"
import { NavLink } from "react-router-dom";

const AllGamesPage = () => {

    const dispatch = useDispatch();

    const games = useSelector(state => state.game)

    const rpg = [];
    const hacknslash = [];
    const rogue = [];
    const adventure = [];
    const fps = [];
    const fighter = [];

    const genreFilter = () => {
        for(let gameKey in games) {

            if(!isNaN(gameKey)) {
                const game = games[gameKey];
                switch(game.genre) {
                    case "RPG":
                        rpg.push(game);
                        break;
                    case "Hack and Slash":
                        hacknslash.push(game);
                        break;
                    case "Roguelike":
                        rogue.push(game);
                        break;
                    case "Adventure":
                        adventure.push(game);
                        break;
                    case "FPS":
                        fps.push(game);
                        break;
                    case "Fighting":
                        fighter.push(game);
                        break;
                    default:
                        break;
                }

            }

        }
    }

    genreFilter()

    useEffect(() => {
        dispatch(getAllGames());
      }, [dispatch]);

    return (
        <div>
            <div>
                <Categories />
            </div>

            <div className="rpg-row">
                <p className="rpg-text">RPG</p>
                    <div className="rpg-cardz">
                    {rpg.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>

            <div className="rpg-row">
                <p className="rpg-text">Hack and Slash</p>
                    <div className="rpg-cardz">
                    {hacknslash.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>


            <div className="rpg-row">
                <p className="rpg-text">Roguelike</p>
                    <div className="rpg-cardz">
                    {rogue.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>


            <div className="rpg-row">
                <p className="rpg-text">Adventure</p>
                    <div className="rpg-cardz">
                    {adventure.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>

            <div className="rpg-row">
                <p className="rpg-text">First-person Shooter</p>
                    <div className="rpg-cardz">
                    {fps.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>

                <div className="rpg-row">
                <p className="rpg-text">Fighters</p>
                    <div className="rpg-cardz">
                    {fighter.map((game) => (

                        <NavLink
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="rpggame-card"
                            >
                    <img
                    src={game.image}
                    alt={game.title}
                        className="rpggame-image"
                            />
                        <div className="rpggame-title">{game.title}</div>
                        <div className="rpggame-price">{game.price}</div>
                    </NavLink>
                    ))}
            </div>
                </div>

        </div>
    )

}


export default AllGamesPage
