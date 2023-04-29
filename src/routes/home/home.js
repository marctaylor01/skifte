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
            { backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh', backgroundRepeat: 'no-repeat' }
}
      >
        <NavigationBar />
        <Pregroup />
      </div>
    </>
  )
}
