import React from 'react'
import { useState } from 'react'
import "./Categories.css"
import { getAllGames } from '../../store/game'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Categories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)
    const [searchTerm, setSearchTerm] = useState('');
    // const [filteredGames, setFilteredGames] = useState([])

    useEffect(() =>{
        dispatch(getAllGames())
    }, [dispatch])

    const handleInput = (e) => {
      setSearchTerm(e.target.value);

      if(e.key === "Enter") {
        handleSearch(e);
      }
    }


    const handleSearch = (e) => {
        e.preventDefault();


        if (searchTerm.length < 3) {
          // Require at least 3 characters for a valid search
          return;
      }

        const matchingGames = Object.values(games).filter(game => {
          const regex = new RegExp(searchTerm, 'i'); // 'i' flag makes the search case-insensitive
          return regex.test(game.title);
      });



        // const matchingGames = Object.values(games).filter(game => {
        //     return game.title.toLowerCase() === searchTerm.toLowerCase();
        // });

        if (matchingGames.length > 0) {
            const gameId = matchingGames[0].id;
            history.push(`/games/${gameId}`);
            setSearchTerm(''); // Reset search term after navigation

            return;
        }
    }

    return (
        <form onSubmit={handleSearch}>
        <div className='cat-bar'>
            <ul className='cat-row'>
                <li>
                    <Link exact to="/notfound" className="cat-li">Your Store</Link>
                </li>

                <li>
                    <Link exact to="/notfound" className="cat-li">New & Noteworthy</Link>
                </li>

                <li>
                    <Link exact to="/notfound" className="cat-li">Categories</Link>
                </li>

                <li>
                    <Link exact to="/notfound" className="cat-li">Points Shop</Link>
                </li>

                <li>
                    <Link exact to="/notfound" className="cat-li">News</Link>
                </li>

                <li>
                    <Link exact to="/notfound" className="cat-li">Labs</Link>
                </li>
            </ul>

            <input type='search'
                placeholder='search'
                className='cat-search'
                value={searchTerm}
                onChange={handleInput}

            />

            {/* {filteredGames.length > 0 && (
                <ul className='dropdown-menu'>
                    {filteredGames.map((game) => (
                        <li key={game.id} className='dropdown-item'>
                            <Link to={`/games/${game.id}`} className="gamez-link" onClick={() => setFilteredGames([])}>
                                <div className='gameitem'>
                                    <img src={game && game?.image}
                                        style={{width: "120px", height: "45px"}}
                                        className='gameimg' />
                                    <div className='gamez-info'>
                                        <div className='gamez-title'>{game.title}</div>
                                        <div className='gamez-price'>${game.price}</div>
                                    </div>

                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )} */}

        </div>
    </form>
    )
}

export default Categories
