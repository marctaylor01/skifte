import React from 'react'
import background from './../../images/background.jpg'
import NavigationBar from '../../components/navbar/navbar'
import './post.css'

export default function PostSpecific (props) {
    return (
      <>
        <div
          className='bg' style={
              { backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }
  }
        >
          <NavigationBar />
          <div className='post'>
            <div className='post-img' style={
                { backgroundImage: `url(${props.image})`, height: '87vh', backgroundRepeat: 'no-repeat'}
            }></div>
            <div className='text-container'>
                <div className='title'>{props.title}</div>
                <div className='text'>{props.text}</div>
            </div>
          </div>
        </div>
      </>
    )
  }