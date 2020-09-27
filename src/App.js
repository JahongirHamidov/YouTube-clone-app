import React from 'react'
import './App.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { MyAppbar } from './Components/MyAppbar/MyAppbar'
import { Content } from './Components/Content/Content'
import {Provider} from './globalState'

import {Trending} from './Components/Trending/Trending'


function App() {
  return (
    <Provider>
    <BrowserRouter>
      <div className="App">
        <MyAppbar/>
        <Switch>
        {/* <iframe 
          width="420" 
          height="345" 
          src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" 
          frameborder="0" 
          allowfullscreen>
            
          </iframe> */}
            <Route path='/' exact>
              <div className='home'>
                <Content/>
                <Content/>
              </div>
            </Route>
            <Route path='/checkout'>

            </Route>
            <Route path='/login'>
              <p>Login page</p>
            </Route>
            <Route path='/trending'>
              <Trending />
            </Route>
            <Route path='/subscription'>

            </Route>
            <Route path='/library'>

            </Route>
            <Route path='/history'>

            </Route>
            <Route path='/yourVideos'>

            </Route>
            <Route path='watchLater'>

            </Route>
            <Route path='/likedVideos'>

            </Route>
        </Switch>
      </div>
    </BrowserRouter>
    </Provider>
  )
}

export default App
