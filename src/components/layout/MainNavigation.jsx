import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>Add New Meetups</Link>
          </li>
          <li>
            <Link to={"/favourites"}>Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
