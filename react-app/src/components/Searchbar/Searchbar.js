// import {useState} from 'react';
// import { getAllGames } from '../../store/game';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import Select from 'react-select';

// const Searchbar = () => {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);
//     const games = useSelector(state => state.game)

//     useEffect(() => {
//         dispatch(getAllGames())
//     }, [dispatch])

//     const handleChange = e => {
//         setQuery(e.target.value)
//     }

//     useEffect(() => {
//         if(query !== '') {

//         }
//     }, [query])


//     return (
//         <div>
//             <input type="search"
//                 placeholder='search'
//                 className='searchbarinput'
//                 onChange={handleChange} />
//             <ul>

//             </ul>

//         </div>
//     )
// }

// export default Searchbar;
