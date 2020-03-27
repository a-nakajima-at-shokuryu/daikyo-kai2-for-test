import React from 'react';
import logo from './logo.svg';
import './Logo.css';
import { Typography, Link } from '@material-ui/core';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link as RouterLink } from 'react-router-dom';

function Logo({
  to, 
}) {
  return (
    <div className="Logo">
      <header className="Logo-header">
        <Link component={RouterLink} to={to} color="inherit" underline="none">
          <React.Fragment>
            <Typography variant="h6">
              <div>クリックしてください！</div>
              <div><ArrowDownIcon /></div>
            </Typography>
            <img src={logo} className="Logo-logo" alt="logo" />
          </React.Fragment>
        </Link>
        <p>
          Edit <code>src/Logo.js</code> and save to reload.
        </p>
        <a
          className="Logo-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Logo;
