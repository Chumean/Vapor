import React from 'react'
import { useState } from 'react'
import "./Categories.css"
import { getAllGames } from '../../store/game'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import Searchbar from '../Searchbar/Searchbar'

const Categories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)
    const [searchTerm, setSearchTerm] = useState('');

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

        if (matchingGames.length > 0) {
            const gameId = matchingGames[0].id;
            history.push(`/games/${gameId}`);
            setSearchTerm(''); // Reset search term after navigati

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
            {/* <Searchbar /> */}

        </div>
    </form>
    )
}

export default Categories
