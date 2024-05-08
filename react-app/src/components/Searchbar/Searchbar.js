import { useState } from 'react';
import { getAllGames } from '../../store/game';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';

const Searchbar = () => {

    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const games = useSelector(state => state.game)
    console.log(games)


    useEffect(() =>{
        dispatch(getAllGames())
    }, [dispatch])

    const handleChange = e => {
        setQuery(e.target.value)
    }


    const handleSearch = (e) => {}
    // useEffect(() => {
    //     if(query !== '') {

    //     }
    // }, [query])

    // a href to game detail page onClick
    // setQuery('')

    return (
        <div>
            <input type="search"
                placeholder='search'
                className='searchbarinput'
                value={query}
                onChange={handleChange}
            />


        </div>
    )
}

export default Searchbar;
