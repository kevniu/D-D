import React                  from 'react';
import App                    from '../App';
import DashBoard              from '../DashBoard/DashBoard';
import TaskBoard              from '../TaskBoard/TaskBoard';

import { Route, IndexRoute }  from 'react-router'


const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={DashBoard} />
    <Route path="/taskboard" component={TaskBoard} />
  </Route>
);

export default routes;
