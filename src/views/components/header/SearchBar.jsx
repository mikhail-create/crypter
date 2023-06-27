import React from 'react'
import styles from './SearchBar.module.scss'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg'

function SearchBar() {
    return (
        <div className={styles.search}>
            <input placeholder='Search' />
            <div className={styles.search__icon}>
                <SearchIcon />
            </div>
        </div>
    )
}

export default SearchBar