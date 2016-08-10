import React                  from 'react'
import DashBoard              from '../DashBoard/DashBoard.js'
import { Route, IndexRoute }  from 'react-router'


module.exports = (
  <Route path="/" component={DashBoard}>
    <IndexRoute component={DashBoard} />
    <Route path="/dashboard" component={DashBoard} />
  </Route>
)
