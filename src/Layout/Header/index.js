import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import {Provider, connect} from 'react-redux';

const menuItems = {
  '/main/1': 'Home',
  // '/library/playlists/': 'Playlists',
  '/myPlaylist': 'MyPlaylist'
}

const Menu = () =>
  <div class="menu">
    Menu
            <div class="icon__menu">
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>

const HeaderLogin = (LoginData) => {
  return (
    <>
      {
        LoginData.loginName ? (
          <>
          <span>{`Your Login: ${LoginData.loginName} `}</span>
          <div class="collapse navbar-collapse justify-content-md-center">
              <ul className="navbar-nav">
        {Object.entries(menuItems).map(([url, text]) => <NavItem url={url} text={text} />)}
            </ul>
            </div>
          </>
        ) :
          (
            <>
              <span className="navbar-text mr-5">{`Your Guest`}</span>
              <Link className="navbar-text mr-5" to="/auth">Sign in</Link>
              <Link className="navbar-text" to="/reg">Sign up</Link>
            </>
          )}
      {/* <span>{`Your Login: ${LoginData.loginName} `||`Your Guest`}</span> */}
    </>
  );
}

const NavItem = ({ url, text }) =>
<li className="nav-item"><Link className="nav-link" to={url}>{text}</Link></li>

export  const Header = ({login}) => {
  return (
    <div>
      <nav>
        <Link className="navbar-text mr-5" to="/auth">Sign in</Link>
      </nav>
    </div>
  );
}