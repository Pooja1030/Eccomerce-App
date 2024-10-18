/* eslint-disable no-unused-vars */
// SearchBar.js
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/collection') {
            setVisible(true); // Show search bar if on the collection page
            setShowSearch(true); // Ensure search is shown
        } else {
            setVisible(false);
            setShowSearch(false); // Hide search when not on collection page
        }
    }, [location, setShowSearch]);

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search' />
                <img className='w-4' src={assets.search_icon} alt='' />
            </div>
            <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer ml-3' src={assets.cross_icon} alt='' />
        </div>
    ) : null;
};

export default SearchBar;
