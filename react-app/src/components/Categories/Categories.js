import React from 'react'
import "./Categories.css"

// div gradient mx-[2.5rem] pl-4 pr-2 mt-8 flex items-center justify-between py-[0.1rem]
// background: rgb(58,99,144);
// background: linear-gradient(90deg,rgba(58,99,144,1) 8%,rgba(90,140,182,1) 31%,rgba(35,71,138,1) 52%,rgba(27,55,125,1) 58%);
// ul 'flex items-center py-1.5 text-white text-[12.5px] gap-10'
// search pl-4 rounded-[0.2rem] placeholder:text-black bg-[#316282]
const Categories = () => {
    return (

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
            />
        </div>

    )
}

export default Categories
