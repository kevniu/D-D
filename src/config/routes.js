import React                 from 'react'
import App                   from '../App.js'
import { Route, IndexRoute } from 'react-router'


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="profile" component={App} />
  </Route>
)
