import React from 'react'
import { useState } from 'react'
import "./Categories.css"
import { getAllGames } from '../../store/game'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// div gradient mx-[2.5rem] pl-4 pr-2 mt-8 flex items-center justify-between py-[0.1rem]
// background: rgb(58,99,144);
// background: linear-gradient(90deg,rgba(58,99,144,1) 8%,rgba(90,140,182,1) 31%,rgba(35,71,138,1) 52%,rgba(27,55,125,1) 58%);
// ul 'flex items-center py-1.5 text-white text-[12.5px] gap-10'
// search pl-4 rounded-[0.2rem] placeholder:text-black bg-[#316282]
const Categories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const games = useSelector(state => state.game)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredGames, setFilteredGames] = useState([])

    // console.log(games)

    useEffect(() =>{
        dispatch(getAllGames())
    }, [dispatch])

    useEffect(() => {
        if(games) {
            const filtered = Object.values(games).filter(game =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase()))
                setFilteredGames(filtered)
            };
    }, [games, searchTerm])

    const handleSearchChange = e => {
        setSearchTerm(e.target.value);
      };

    const handleSearch = (e) => {
        e.preventDefault();
        if(filteredGames.length > 0) {
            const gameId = filteredGames[0].id
            history.push(`/games/${gameId}`)
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSearch(e)
        }
    }

    return (
        <form onSubmit={handleSearch}>
        <div className='cat-bar'>
            <ul className='cat-row'>
                <li>
                    <p>Your Store</p>
                </li>

                <li>
                    <p>New & Noteworthy</p>
                </li>

                <li>
                    <p>Categories</p>
                </li>

                <li>
                    <p>Points Shop</p>
                </li>

                <li>
                    <p>News</p>
                </li>

                <li>
                    <p>Labs</p>
                </li>
            </ul>

            <input type='search'
                placeholder='search'
                className='cat-search'
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
            />

        </div>
    </form>
    )
}

export default Categories
