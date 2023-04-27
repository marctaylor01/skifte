import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/home/home'
import PostSpecific from './routes/post/post'
import data from './routes/post/postText.json'
import webbImg from './images/webb.jpg'
import ölBarImg from './images/öl&bar.jpg'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/webb&öd',
    element: <PostSpecific title='Webb & ÖD' text={data.webb} image={webbImg}/>
  },
  {
    path: '/q',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/ken',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/trykk/queen',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/trykk/king',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/mos',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/prolk',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/spons',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/öl&bar',
    element: <PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>
  },
  {
    path: '/pr&event',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/biljett&u-lag',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/werk',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  },
  {
    path: '/j4',
    element: <PostSpecific title='Webb & ÖD' text={data.webb}/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()