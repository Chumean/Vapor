// // import { useState } from 'react';
// import { getAllGames } from '../../store/game';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState, useRef } from 'react';
// // import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import './Searchbar.css'

// const Searchbar = () => {
//     // const history = useHistory();
//     // const dispatch = useDispatch();
//     const [query, setQuery] = useState('');
//     const games = useSelector(state => state.game)
//     const [results, setResults] = useState([])
//     const searchContainerRef = useRef(null);

//     console.log(games, "GAMES")

//     // useEffect(() =>{
//     //     dispatch(getAllGames())
//     // }, [dispatch])


//     const games_backup = [
//         {
//             'title': 'Persona 5 Royal',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589376/656e8c37-8260-4bfc-82d0-e16650dd147c_pz6oed.jpg'
//         },
//         {
//             'title': 'NieR: Automata',
//             'price': 39.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1687565350/featured-nier-automata-cover-art_woknln.jpg'
//         },
//         {
//             'title': 'Guilty Gear Strive',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590315/guilty-gear-strive-1617935028610_iwvoxl.jpg'
//         },
//         {
//             'title': 'Black Desert',
//             'price': 29.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590357/A1fnUEYCOeL._SX540__duwyne.jpg'
//         },
//         {
//             'title': 'Under Night In-Birth Exe:Late[st]',
//             'price': 29.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590390/capsule_616x353_nxqqtx.jpg'
//         },
//         {
//             'title': 'Melty Blood: Type Lumina',
//             'price': 49.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686451631/ba3344f015a771b537396f323a035e8f29c13835a517c6ecf01992f91a8a81e9_vre4tt.avif'
//         },
//         {
//             'title': 'Darkest Dungeon',
//             'price': 24.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590451/Darkest-Dungeon_le1rlw.jpg'
//         },
//         {
//             'title': 'Hades',
//             'price': 24.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590492/header_atue4i.jpg'
//         },
//         {
//             'title': 'Devil May Cry 5',
//             'price': 39.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590513/capsule_616x353_fxey7m.jpg'
//         },
//         {
//             'title': 'Bayonetta',
//             'price': 19.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590544/5e8029ad4b352792683f9ea226ce145329cacfee11c72bb94fe7d5a91d7cc7ac_noevee.avif'
//         },
//         {
//             'title': 'Cyberpunk 2077',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590565/download_xsdag0.jpg'
//         },
//         {
//             'title': 'The Witcher 3: Wild Hunt',
//             'price': 29.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429223/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f_rcxrtm.jpg'
//         },
//         {
//             'title': 'Red Dead Redemption 2',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429247/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec_eb1orn.jpg'
//         },
//         {
//             'title': 'Lonk from Pennsylvania',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429279/BOTW-Share_icon_oobjeb.jpg'
//         },
//         {
//             'title': 'Grand Theft Auto V',
//             'price': 29.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429323/gta-5-vr-mod_wvkquo.jpg'
//         },
//         {
//             'title': 'Minecraft',
//             'price': 26.95,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429358/Minecraft_PC_Bundle_XboxClub_1920x1080_y0kwyw.webp'
//         },
//         {
//             'title': 'The Elder Scrolls V: Skyrim',
//             'price': 39.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429422/hero_jdmvel.avif'
//         },
//         {
//             'title': 'Overwatch',
//             'price': 19.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429471/overwatchmain_vt28ld.webp'
//         },
//         {
//             'title': 'Fortnite',
//             'price': 0.01,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429557/fortnite-home-page-battle-pass-promo-slide-desktop-1920x1080-8d9444dcb067_zuhamq.jpg'
//         },
//         {
//             'title': 'Super Mario Odyssey',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429523/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5_majmso.avif'
//         },
//         {
//             'title': 'Call of Duty: Modern Warfare',
//             'price': 59.99,
//             'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429645/maxresdefault_vbpumu.jpg'
//         }
//     ]

//     const handleChange = e => {
//         const searchTerm = e.target.value.toLowerCase();
//         setQuery(searchTerm)

//         // const filtered = games_backup.filter(game =>
//         //     game.title.toLowerCase().includes(searchTerm)
//         // )

//         const gamesArr = Object.values(games);
//         const filtered = gamesArr.filter(game =>
//             game.title.toLowerCase().includes(searchTerm)
//         );
//         setResults(filtered)
//     }

//     useEffect(() => {
//         const handleOutsideClick = (event) => {
//             if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
//                 setResults([]); // Close search results
//             }
//         };

//         const handleKeyPress = (event) => {
//             if(event.key === 'Backspace' && query === '') {
//                 setResults([]) // Close search results
//             }
//         }

//         document.addEventListener('mousedown', handleOutsideClick);
//         document.addEventListener('keydown', handleKeyPress)

//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//             document.removeEventListener('keydown', handleKeyPress)
//         };
//     }, [query]);


//     return (
//         <div className='search-container' ref={searchContainerRef}>
//             <input type="search"
//                 placeholder='search'
//                 className='cat-search'
//                 value={query}
//                 onChange={handleChange}
//             />
//             <ul className='search-results'>
//                 {results.slice(0, 5).map((game, index) => (
//                     <li key={index}>
//                         <Link to={`/games/${game.id}`}>
//                             <img src={game.image} alt={game.title} style={{width: '231px', height: '87px'}} />
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
