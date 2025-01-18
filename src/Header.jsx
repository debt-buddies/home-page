import React from 'react'
import './App.css';


const Header = ({subtitle}) => {
  return (
    <div className='header'>This is Header <span>{subtitle}</span></div>
  )
}

export default Header