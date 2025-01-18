import React from 'react'
import './App.scss';


const Header = ({subtitle, bgColor="rgb(2, 190, 2)"}) => {
  return (
    <div className='header' style={{backgroundColor: bgColor}}>This is Header <span>{subtitle}</span></div>
  )
}

export default Header