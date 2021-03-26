import React from 'react';
import classes from'./Header.module.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
  return (
    <header className={classes.header}>
      <img className={classes.header_logo} src="https://upload.wikimedia.org/wikipedia/ru/d/d5/Acb-logo-v1.png" alt="Logo" />
      <div className={classes.loginBlock}>
        { 
          props.isAuth ? 
          <div>
            <div>{props.login}</div>
            <button onClick={props.logout}>Log out</button>
          </div>  :
          <NavLink to={"/login"}>Log In</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;