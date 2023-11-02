import { useDispatch, useSelector } from "react-redux";
import{React, useEffect } from "react";
import { getAllGames } from "../../store/game";
import "./FightRow.css"

const FightRow = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)

    const fightingGames = Object.values(games).filter((game) => game.genre === "Fighting");


    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch])

    return (
        <div className="fighter-row">
            <p>FIGHTERS</p>
            <div className="game-cards">
            {fightingGames.map((game) => (
                <div key={game.id} className="fgame-card">
                    <img src={game.image} alt={game.title} className="fgame-image" />
                    <div className="fgame-title">{game.title}</div>
                    <div className="fgame-price">{game.price}</div>
                </div>
        ))}
            </div>
    </div>
    )
}

export default FightRow
