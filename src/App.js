import logo from './logo.svg'
import './App.css'
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './routes/home/home'
import PostSpecific from './routes/post/post';
import data from './routes/post/postText.json'
import webbImg from './images/webb.jpg'
import ölBarImg from './images/öl&bar.jpg'
import qImg from './images/chief.jpg'
import kenImg from './images/cash.jpg'
import werkImg from './images/werk.jpg'
import biljettImg from './images/biljett&u-lag.jpg'
import notFoundImg from './images/notFound.jpg'
import preventImg from './images/prevent.jpg'

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
        element= {<PostSpecific title='Webb & ÖD TEST' text={data.webb} image={webbImg}/>}
      />
      <Route
        exact
        path='/öl&bar'
        element= {<PostSpecific title='Öl & Bar' text={data['öl&bar']} image={ölBarImg}/>}
      />
      <Route
        exact
        path='/q'
        element= {<PostSpecific title='Chief' text={data.q} image={qImg}/>}
      />
      <Route
        exact
        path='/ken'
        element= {<PostSpecific title='Cash' text={data.ken} image={kenImg}/>}
      />
      <Route
        exact
        path='/trykk-queen'
        element= {<PostSpecific title='Trykk' text={data['trykk-queen']} image={notFoundImg}/>}
      />
      <Route
        exact
        path='/trykk-king'
        element= {<PostSpecific title='Trykk' text={data['trykk-king']} image={notFoundImg}/>}
      />
      <Route
        exact
        path='/mos'
        element= {<PostSpecific title='MoS' text={data.mos} image={notFoundImg}/>}
      />
      <Route
        exact
        path='/prolk'
        element= {<PostSpecific title='PR & Folk' text={data.prolk} image={notFoundImg}/>}
      />
      <Route
        exact
        path='/spons'
        element= {<PostSpecific title='Spons' text={data.spons} image={notFoundImg}/>}
      />
      <Route
        exact
        path='/pr&event'
        element= {<PostSpecific title='PR & Event' text={data.prevent} image={preventImg}/>}
      />
      <Route
        exact
        path='/biljett&u-lag'
        element= {<PostSpecific title='Biljett & U-lag' text={data['biljett&u-lag']} image={biljettImg}/>}
      />
      <Route
        exact
        path='/werk'
        element= {<PostSpecific title='Werk' text={data.werk} image={werkImg}/>}
      />
      <Route
        exact
        path='/j4'
        element= {<PostSpecific title='J^8' text={data.j4} image={notFoundImg}/>}
      />
    </Routes>
  </HashRouter>
)

export default App
