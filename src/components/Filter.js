import React from 'react'

export default function Filter({filter, onFilter}) {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={onFilter}>Filter good dogs: {(filter)? 'ON' : 'OFF'}</button>
    </div>
  )
}
