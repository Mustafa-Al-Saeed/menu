import React, { useState } from 'react'

const SearchArea = ({styleButton , styleInput , onSearch}) => {
  
  const [inputValue , setInputValue] = useState("")  
  
  const search = (e) => {
    e.preventDefault()
    onSearch(inputValue)
  } 

  return (
    <form className=' flex' onSubmit={search}>
        <input
        className={`${styleInput}`}
        type="text"
        placeholder="ابحث ..."
        onChange={(e) => {setInputValue(e.target.value)}}
        />
        <button className={`${styleButton}`}>ابحث</button>
    </form>
  )
}

export default SearchArea