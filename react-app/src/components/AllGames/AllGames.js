
import { useSelector, useDispatch } from "react-redux";
import { useEffect, React } from "react";
import { useHistory } from "react-router-dom";
import { getAllGames } from "../../store/game";
import Categories from "../Categories/Categories";


const AllGames = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const games = useSelector(state => state.game)

    return (
        <div>
            <div>
                <Categories />
            </div>
        </div>
    )

}


export default AllGames
