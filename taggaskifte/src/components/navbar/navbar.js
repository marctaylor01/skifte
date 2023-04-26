import React from 'react'
import './navbar.css'

export default function Navbar () {
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-texts'>
          <a className='title' href='/'>Tagga SKIFTE!!</a>
        </div>
        <div className='links'>
          <a className='dg-songs' href='/dgsongs' activeStyle>
            DG Låtar
          </a>
          <a className='pg-songs' href='/pgsongs'>PG Låtar</a>
        </div>
      </div>
    </>
  )
}
