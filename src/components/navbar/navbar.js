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
          <a className='dg-songs' href='https://soundcloud.com/d-group' activeStyle target='_blank'>
            DG Låtar
          </a>
          <a className='pg-songs' href='/pgsongs' target='_blank'>PG Låtar</a>
        </div>
      </div>
    </>
  )
}
