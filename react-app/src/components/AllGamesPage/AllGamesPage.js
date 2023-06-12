
import { useSelector, useDispatch } from "react-redux";
import { useEffect, React } from "react";
import { useHistory } from "react-router-dom";
import { getAllGames } from "../../store/game";
import Categories from "../Categories/Categories";
import "./AllGamesPage.css"
import { NavLink } from "react-router-dom";

const AllGamesPage = () => {
    // const history = useHistory();
    // const dispatch = useDispatch();

    const games = useSelector(state => state.game)


    const rpg = Object.values(games).filter((game) => game.genre === "RPG")
    const actionG = Object.values(games).filter((game) => game.genre === "Action")
    const platformer = Object.values(games).filter((game) => game.genre === "Platformer")
    const hacknslash = Object.values(games).filter((game) => game.genre === "Hack and Slash")
    const rogue = Object.values(games).filter((game) => game.genre === "Roguelike")
    const adventure = Object.values(games).filter((game) => game.genre === "Adventure")
    const sandbox = Object.values(games).filter((game) => game.genre === "Sandbox")
    const fps = Object.values(games).filter((game) => game.genre === "FPS")


    console.log(Object.values(games).map((game) => game.genre));

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


        </div>
    )

}


export default AllGamesPage
