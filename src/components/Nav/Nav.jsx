import React from "react";
import SearchBar from '../Searchbar/SearchBar';
import styles from './Nav.module.css';


let {nav, link} = styles;

const Nav = ({ onSearch })=>{

    return(
        <div className={nav}>
            <a className={link} href="http://" target="_blank" rel="noopener noreferrer">About</a>
            <a className={link} href="http://" target="_blank" rel="noopener noreferrer">Favorites</a>
            <a className={link} href="http://" target="_blank" rel="noopener noreferrer">Home</a>
            {/* <Link className={link} to={'/about'}>About</Link>
            <Link className={link} to={'/favorites'}>Favorites</Link>
            <Link className={link} to={'/home'}>Home</Link> */}
            <SearchBar onSearch={ onSearch }/>
        </div>
    );
}

export default Nav;