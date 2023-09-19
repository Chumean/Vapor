import React from 'react'
import { useState } from 'react'
import "./Categories.css"
import { getAllGames } from '../../store/game'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

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
    // const [filteredGames, setFilteredGames] = useState([])


    useEffect(() =>{
        dispatch(getAllGames())
    }, [dispatch])


    // useEffect(() => {
    //     const handleDocumentClick = (e) => {
    //       const searchBar = document.querySelector('.cat-search');
    //       const dropdownMenu = document.querySelector('.dropdown-menu');

    //       if (searchBar && dropdownMenu) {
    //         if (!searchBar.contains(e.target) && !dropdownMenu.contains(e.target)) {
    //           setFilteredGames([]);
    //         }
    //       }
    //     };

    //     document.addEventListener('click', handleDocumentClick);

    //     return () => {
    //       document.removeEventListener('click', handleDocumentClick);
    //       setFilteredGames([]);
    //     };
    //   }, []);

    // const handleInput = (e) => {
    //     const term = e.target.value;
    //     setSearchTerm(term);

    //     if(term.trim() === '') {
    //         setFilteredGames([]);
    //         return;
    //     }


    //     // Filter games based on search term
    //     const filtered = Object.values(games).filter(
    //         (game) => game.title.toLowerCase().startsWith(term.toLowerCase())
    //     );

    //     // Show first 5 results
    //     setFilteredGames(filtered.slice(0, 5));
    // }

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


    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     if(filteredGames.length > 0) {
    //         const gameId = filteredGames[0].id;
    //         history.push(`/games/${gameId}`)
    //     }
    // }




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


/*

    // ******************************************** OLD STUFF ***********************************************

    import React from 'react'
import { useState } from 'react'
import "./Categories.css"
import { getAllGames } from '../../store/game'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

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
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname);


    const gameTitleArrays = {
        'Persona 5 Royal': [],
        'NieR: Automata': [],
        'Guilty Gear Strive': [],
        'Black Desert': [],
        'Under Night In-Birth Exe:Late[st]': [],
        'Melty Blood: Type Lumina': [],
        'Darkest Dungeon': [],
        'Hades': [],
        'Devil May Cry 5': [],
        'Bayonetta': [],
        'Cyberpunk 2077': [],
        'The Witcher 3: Wild Hunt': [],
        'Red Dead Redemption 2': [],
        'Lonk from Pennsylvania': [],
        'Grand Theft Auto V': [],
        'Minecraft': [],
        'The Elder Scrolls V: Skyrim': [],
        'Overwatch': [],
        'Fortnite': [],
        'Super Mario Odyssey': [],
        'Call of Duty: Modern Warfare': [],
    };



    const titleFilter = (games) => {
        for (let gameKey in games) {
          if (!isNaN(gameKey)) {
            const game = games[gameKey];
            const title = game.title;

            switch (title) {
              case 'Persona 5 Royal':
                gameTitleArrays['Persona 5 Royal'].push(game);
                break;
              case 'NieR: Automata':
                gameTitleArrays['NieR: Automata'].push(game);
                break;
              case 'Guilty Gear Strive':
                gameTitleArrays['Guilty Gear Strive'].push(game);
                break;
              case 'Black Desert':
                gameTitleArrays['Black Desert'].push(game);
                break;
              case 'Under Night In-Birth Exe:Late[st]':
                gameTitleArrays['Under Night In-Birth Exe:Late[st]'].push(game);
                break;
              case 'Melty Blood: Type Lumina':
                gameTitleArrays['Melty Blood: Type Lumina'].push(game);
                break;
              case 'Darkest Dungeon':
                gameTitleArrays['Darkest Dungeon'].push(game);
                break;
              case 'Hades':
                gameTitleArrays['Hades'].push(game);
                break;
              case 'Devil May Cry 5':
                gameTitleArrays['Devil May Cry 5'].push(game);
                break;
              case 'Bayonetta':
                gameTitleArrays['Bayonetta'].push(game);
                break;
              case 'Cyberpunk 2077':
                gameTitleArrays['Cyberpunk 2077'].push(game);
                break;
              case 'The Witcher 3: Wild Hunt':
                gameTitleArrays['The Witcher 3: Wild Hunt'].push(game);
                break;
              case 'Red Dead Redemption 2':
                gameTitleArrays['Red Dead Redemption 2'].push(game);
                break;
              case 'Lonk from Pennsylvania':
                gameTitleArrays['Lonk from Pennsylvania'].push(game);
                break;
              case 'Grand Theft Auto V':
                gameTitleArrays['Grand Theft Auto V'].push(game);
                break;
              case 'Minecraft':
                gameTitleArrays['Minecraft'].push(game);
                break;
              case 'The Elder Scrolls V: Skyrim':
                gameTitleArrays['The Elder Scrolls V: Skyrim'].push(game);
                break;
              case 'Overwatch':
                gameTitleArrays['Overwatch'].push(game);
                break;
              case 'Fortnite':
                gameTitleArrays['Fortnite'].push(game);
                break;
              case 'Super Mario Odyssey':
                gameTitleArrays['Super Mario Odyssey'].push(game);
                break;
              case 'Call of Duty: Modern Warfare':
                gameTitleArrays['Call of Duty: Modern Warfare'].push(game);
                break;
              default:
                break;
            }
          }
        }
      };

      // Usage:
      titleFilter(games);




    // useEffect(() =>{
    //     dispatch(getAllGames())
    // }, [dispatch])



    useEffect(() => {
        const handleDocumentClick = (e) => {
          const searchBar = document.querySelector('.cat-search');
          const dropdownMenu = document.querySelector('.dropdown-menu');

          if (searchBar && dropdownMenu) {
            if (!searchBar.contains(e.target) && !dropdownMenu.contains(e.target)) {
              setFilteredGames([]);
            }
          }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
          document.removeEventListener('click', handleDocumentClick);
          setFilteredGames([]);
        };
      }, []);

    const handleInput = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if(term.trim() === '') {
            setFilteredGames([]);
            return;
        }


        // Filter games based on search term
        const filtered = Object.values(games).filter(
            (game) => game.title.toLowerCase().startsWith(term.toLowerCase())
        );

        // Show first 5 results
        setFilteredGames(filtered.slice(0, 5));
    }



    const handleSearch = (e) => {
        e.preventDefault();

        const matchingGames = Object.values(games).filter(game => {
            return game.title.toLowerCase() === searchTerm.toLowerCase();
        });

        if (matchingGames.length > 0) {
            const gameId = matchingGames[0].id;
            history.push(`/games/${gameId}`);
            setSearchTerm(''); // Reset search term after navigation
            setFilteredGames([]); // Clear filtered games
            return;
        }
    }


    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     if(filteredGames.length > 0) {
    //         const gameId = filteredGames[0].id;
    //         history.push(`/games/${gameId}`)
    //     }
    // }





    // ******************************************** OLD STUFF ***********************************************

    // useEffect(() => {
    //     if(games) {
    //         const filtered = Object.values(games).filter(game =>
    //             game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //             setFilteredGames(filtered)
    //         };
    // }, [games, searchTerm])

    // const handleSearchChange = e => {
    //     setSearchTerm(e.target.value);
    //   };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     if(filteredGames.length > 0) {
    //         const gameId = filteredGames[0].id
    //         history.push(`/games/${gameId}`)
    //     }
    // }

    // const handleKeyPress = (e) => {
    //     if(e.key === "Enter") {
    //         handleSearch(e)
    //     }
    // }


    // useEffect(() => {
    //     if(games) {
    //         const filtered = Object.values(games).filter(game =>
    //             game.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //             setFilteredGames(filtered)
    //         };
    // }, [games, searchTerm])

    // const handleSearchChange = e => {
    //     setSearchTerm(e.target.value);
    //   };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     if(filteredGames.length > 0) {
    //         const gameId = filteredGames[0].id
    //         history.push(`/games/${gameId}`)
    //     }
    // }

    // const handleKeyPress = (e) => {
    //     if(e.key === "Enter") {
    //         handleSearch(e)
    //     }
    // }





    // ******************************************** OLD STUFF ***********************************************




*/
