import { getAllGames } from '../../store/game';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useEffect, useState, useRef } from 'react';

import './Searchbar.css'

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const games = useSelector(state => state.game);
    const [results, setResults] = useState([]);
    const searchRef = useRef(null);


    const games_backup = [
        {
            'id': 1,
            'title': 'Persona 5 Royal',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685589376/656e8c37-8260-4bfc-82d0-e16650dd147c_pz6oed.jpg'
        },
        {
            'id': 2,
            'title': 'NieR: Automata',
            'price': 39.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1687565350/featured-nier-automata-cover-art_woknln.jpg'
        },
        {
            'id': 3,
            'title': 'Guilty Gear Strive',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590315/guilty-gear-strive-1617935028610_iwvoxl.jpg'
        },
        {
            'id': 4,
            'title': 'Black Desert',
            'price': 29.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590357/A1fnUEYCOeL._SX540__duwyne.jpg'
        },
        {
            'id': 5,
            'title': 'Under Night In-Birth Exe:Late[st]',
            'price': 29.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590390/capsule_616x353_nxqqtx.jpg'
        },
        {
            'id': 6,
            'title': 'Melty Blood: Type Lumina',
            'price': 49.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686451631/ba3344f015a771b537396f323a035e8f29c13835a517c6ecf01992f91a8a81e9_vre4tt.avif'
        },
        {
            'id': 7,
            'title': 'Darkest Dungeon',
            'price': 24.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590451/Darkest-Dungeon_le1rlw.jpg'
        },
        {
            'id': 8,
            'title': 'Hades',
            'price': 24.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590492/header_atue4i.jpg'
        },
        {   'id': 9,
            'title': 'Devil May Cry 5',
            'price': 39.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590513/capsule_616x353_fxey7m.jpg'
        },
        {
            'id': 10,
            'title': 'Bayonetta',
            'price': 19.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590544/5e8029ad4b352792683f9ea226ce145329cacfee11c72bb94fe7d5a91d7cc7ac_noevee.avif'
        },
        {
            'id': 11,
            'title': 'Cyberpunk 2077',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1685590565/download_xsdag0.jpg'
        },
        {
            'id': 12,
            'title': 'The Witcher 3: Wild Hunt',
            'price': 29.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429223/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f_rcxrtm.jpg'
        },
        {
            'id': 13,
            'title': 'Red Dead Redemption 2',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429247/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec_eb1orn.jpg'
        },
        {
            'id': 14,
            'title': 'Lonk from Pennsylvania',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429279/BOTW-Share_icon_oobjeb.jpg'
        },
        {
            'id': 15,
            'title': 'Grand Theft Auto V',
            'price': 29.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429323/gta-5-vr-mod_wvkquo.jpg'
        },
        {
            'id': 16,
            'title': 'Minecraft',
            'price': 26.95,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429358/Minecraft_PC_Bundle_XboxClub_1920x1080_y0kwyw.webp'
        },
        {
            'id': 17,
            'title': 'The Elder Scrolls V: Skyrim',
            'price': 39.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429422/hero_jdmvel.avif'
        },
        {
            'id': 18,
            'title': 'Overwatch',
            'price': 19.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429471/overwatchmain_vt28ld.webp'
        },
        {
            'id': 19,
            'title': 'Fortnite',
            'price': 0.01,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429557/fortnite-home-page-battle-pass-promo-slide-desktop-1920x1080-8d9444dcb067_zuhamq.jpg'
        },
        {
            'id': 20,
            'title': 'Super Mario Odyssey',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429523/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5_majmso.avif'
        },
        {
            'id': 21,
            'title': 'Call of Duty: Modern Warfare',
            'price': 59.99,
            'image': 'https://res.cloudinary.com/dsu4khzr3/image/upload/v1686429645/maxresdefault_vbpumu.jpg'
        }
    ]

    const handleChange = e => {
        const searchTerm = e.target.value.toLowerCase();
        setQuery(searchTerm)

        if(searchTerm === '') {
            setResults([]);
        } else {
            const filtered = games_backup.filter(game =>
                game.title.toLowerCase().includes(searchTerm)
            )
            setResults(filtered)
        }

    }

    const handleClick = event => {
        if(searchRef.current && !searchRef.current.contains(event.target)) {
            setResults([])
        }
    }


    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className='search-container'>
            <input type="search"
                placeholder='search'
                className='searchbar-input'
                value={query}
                onChange={handleChange}
            />


            <div className='search-results'>
                {results.slice(0, 5).map((game, index) => (
                    <div key={index} className='search-item'>
                        <a href={`/games/${game.id}`} className='search-link'>
                            <div className='search-img'>
                                <img src={game.image} alt={game.title} style={{width: '100px', height: '37px'}} />

                            </div>
                            <div className='search-details'>
                                <p className='search-title'>{game.title}</p>
                                <p className='search-price'>${game.price}</p>

                            </div>

                        </a>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Searchbar;
