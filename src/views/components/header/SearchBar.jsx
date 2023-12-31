import React from 'react'
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

function SearchBar() {
  return (
    <div className="search font-caption font-caption--2">
      <input placeholder='Search' />
      <div className="search--icon">
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBar