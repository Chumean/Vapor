import {useState} from 'react';
import { getAllGames } from '../../store/game';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';

const Searchbar = (query, games) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const gamez = useSelector(state => state.game)





    return (
        <div>
            <input type="search"
                placeholder='search'
                onChange={(e) => setQuery(e.target.value)} />
            <ul>

            </ul>

        </div>
    )
}

export default Searchbar;
