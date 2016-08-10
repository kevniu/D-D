import React                  from 'react'
import Home                   from '../Home/Home.js'
import { Route, IndexRoute }  from 'react-router'


module.exports = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="profile" component={Home} />
  </Route>
)
