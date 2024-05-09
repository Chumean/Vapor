// import { useState } from 'react';
// import { getAllGames } from '../../store/game';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// const Searchbar = () => {
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const [query, setQuery] = useState('');
//     const games = useSelector(state => state.game)
//     const [results, setResults] = useState([])



//     useEffect(() =>{
//         dispatch(getAllGames())
//     }, [dispatch])

//     const handleChange = e => {
//         const searchTerm = e.target.value.toLowerCase();
//         setQuery(searchTerm)

//         const filtered = games.filter(game =>
//             game.title.toLowerCase().includes(searchTerm)
//         )
//         setResults(filtered)
//     }

//     return (
//         <div>
//             <input type="search"
//                 placeholder='search'
//                 className='searchbarinput'
//                 value={query}
//                 onChange={handleChange}
//             />
//             <ul>
//                 {results.map(game => (
//                     <li key={game.id}>
//                         <Link to={`/games/${game.id}`} >
//                             <img src={game.image} alt={game.title} />
//                             <h2>{game.title}</h2>
//                             <p>{game.price}</p>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//         </div>
//     )
// }

// export default Searchbar;
