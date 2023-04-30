import React from 'react'
import './navbar.css'
import song from './../../audioFiles/song.mp3'
import { useState } from 'react'

export default function Navbar () {
  const [isPlaying, setPlaying] = useState(false)
  const audio = new Audio(song)
  function playSong() {
    if (!isPlaying) {
      setPlaying(true);
      audio.play();
    }
  }
  
  return (
    <>
      <div className='navbar-container'>
        <div className='navbar-texts'>
          <a className='title' href='/skifte'>Tagga SKIFTE!!</a>
        </div>
        <div className='links'>
          <a className='dg-songs' href='https://soundcloud.com/d-group' activeStyle target='_blank'>
            DG Låtar
          </a>
          <a className='pg-songs' target='_blank' onClick={playSong}>PG Låtar</a>
        </div>
      </div>
    </>
  )
}
