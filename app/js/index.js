import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/Main';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';


// Load Foundation
import 'foundation-sites/dist/css/foundation.min.css';
$(document).foundation();
// Load styles
import '../styles/main.scss';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='countdown' component={Countdown} />
        <IndexRoute component={Stopwatch} />
      </Route>
    </Router>
  )
};

render(<Root />, document.querySelector('#app'));
