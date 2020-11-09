import React from 'react';
import classes from'./Header.module.css';

function Header () {
  return (
    <header className={classes.header}>
      <img className={classes.header_logo} src="https://upload.wikimedia.org/wikipedia/ru/d/d5/Acb-logo-v1.png" alt="Logo" />
    </header>
  )
}

export default Header;