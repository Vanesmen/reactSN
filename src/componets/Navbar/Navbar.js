import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
        <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}>Dialogs</NavLink></li>
        <li className={classes.item}><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></li>
        <li className={classes.item}>News</li>
        <li className={classes.item}>Music</li>
        <li className={classes.item}>Settings</li>
      </ul>
    </nav>
  )
}

export default Navbar;