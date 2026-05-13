import React from 'react'
import './SearchBar.css'

const SearchBar = ({handleChange}) => {
  return (
    <>
    <input type="text" border-rea onChange={handleChange} placeholder='Enter The Product You Want'
     style={{ backgroundColor: "White",borderRadius:"10px",width:"100%",border:"2px,solid,black" }}/>
    </>
  )
}

export default SearchBar