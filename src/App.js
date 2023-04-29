import logo from './logo.svg'
import './App.css'
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './routes/home/home'
import PostSpecific from './routes/post/post';
import data from './routes/post/postText.json'
import webbImg from './images/webb.jpg'
import ölBarImg from './images/öl&bar.jpg'

const App = () => (
  <HashRouter>
    <Routes>
      <Route
        exact
        path='/'
        element={<Home />}
      />
      <Route
        exact
        path='/webb&öd'
        element= {<PostSpecific title='Webb & ÖD' text={data.webb} image={webbImg}/>}
      />
      <Route
        exact
        path='/öl&bar'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/q'
        element= {<PostSpecific title='Webb & ÖD' text={data.webb}/>}
      />
      <Route
        exact
        path='/ken'
        element= {<PostSpecific title='Webb & ÖD' text={data.webb}/>}
      />
      <Route
        exact
        path='/trykk-queen'
        element= {<PostSpecific title='Trykk' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/trykk-king'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/mos'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/prolk'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/spons'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/pr&event'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/biljett&u-lag'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/werk'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/j4'
        element= {<PostSpecific title='Öl & Bar' text={data.webb} image={ölBarImg}/>}
      />
    </Routes>
  </HashRouter>
)

export default App
