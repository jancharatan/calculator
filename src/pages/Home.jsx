import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import RouteButton from '../components/RouteButton';

const Home = () => (
  <div>
    <Link className="link" to="/about">
      <RouteButton> About </RouteButton>
    </Link>
    <div className="home">
      <div className="wrapper">
        <div className="header">
          Select a tool.
        </div>
        <Link className="link" to="/calculator">
          <RouteButton isBig> Calculator </RouteButton>
        </Link>
        <div className="footer">
          Created in July 2020 by Jan Charatan.
        </div>
      </div>
    </div>
  </div>

);

export default Home;
