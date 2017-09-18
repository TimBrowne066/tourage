import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from '../bundles/navBar/navBar';
import BandShowContainer from '../bundles/bands/containers/bandShowContainer';
import BandsContainer from '../bundles/bands/containers/bandsContainer';

const Main = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={BandsContainer}/>
        <Route path='/bands/:id' component={BandShowContainer}/>
      </Route>
    </Router>
  )
}

export default Main;
