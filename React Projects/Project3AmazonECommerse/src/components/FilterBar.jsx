import React, { useState } from 'react'
import './FilterBar.css'

const FilterBar = ({ categories, handleClick }) => {

  const [active, setActive] = useState(null)

  const onClickHandler = (cat) => {
    setActive(cat)
    handleClick(cat)
  }

  return (
    <ul className="filter-bar">
      {categories.map((cat, index) => (
        <li
          key={index}
          className={`filter-item ${active === cat ? 'active' : ''}`}
          onClick={() => onClickHandler(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  )
}

export default FilterBar