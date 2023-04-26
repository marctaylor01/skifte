import React from 'react'
import background from './../../images/background.jpg'
import NavigationBar from '../../components/navbar/navbar'
import Pregroup from '../../components/pregroup/pregroup'
import './home.css'

export default function Home () {
  return (
    <>
      <div
        className='bg' style={
            { backgroundImage: `url(${background})`, height: '100vh', backgroundRepeat: 'no-repeat' }
}
      >
        <NavigationBar />
        <Pregroup />
      </div>
    </>
  )
}
