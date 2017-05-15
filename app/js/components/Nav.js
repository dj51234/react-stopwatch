import React from 'react';
import { Link, IndexLink} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li><IndexLink to="/" activeClassName="active">Stopwatch</IndexLink></li>
            <li><Link activeClassName="active">Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>Created by <a href="">Derrick</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
