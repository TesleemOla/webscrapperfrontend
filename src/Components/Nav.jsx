import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>{
    return (
      <nav>
        <h1>
          <Link to="/">CryptoNews</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Nav;